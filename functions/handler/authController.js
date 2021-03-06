const functions = require('firebase-functions')
const config = require('../utility/config')
const firebase = require('firebase')
const { db, admin }= require('../utility/admin')
firebase.initializeApp(config)




const {validateRegisterData, validateLoginData, reduceUserDetails } =require('../utility/valid')

exports.signUp = functions.https.onRequest((req,res)=>{
   const newUser ={
    email: req.body.email,
    password: req.body.password,
    handle: req.body.handle
   };

   const { valid, errors} = validateRegisterData(newUser)

    if(!valid) return res.status(400).json(errors)

    const noImg = 'no-img.png'
    const noHeader = 'no-header.jpg'

   let token, userId;
   db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if(doc.exists){
                return res.status(400).json({ handle: 'this handle is already taken'})
            }else{
                return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
            }
        })
        .then(data =>{
            userId = data.user.uid;
            return data.user.getIdToken();

        })
        .then(idToken =>{
            token = idToken;
            const userCredentials ={
                handle: newUser.handle,
                email: newUser.email,
                createAt: new Date().toLocaleString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
                headerUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noHeader}?alt=media`,
                userId
            };
            return db.doc(`/users/${newUser.handle}`).set(userCredentials)
        })
        .then(()=>{
            return res.status(201).json({token})
        })
        .catch(err => {
        console.error(err);
        if(err.code === 'auth/email-already-in-use'){
            return res.status(400).json({ email: 'Email is already in use'})
        }else{
            return res.status(500).json({ general: "Something went wrong, please try again"})
        }
    })
})

exports.login = (req,res) =>{
    const user = {
        email:req.body.email,
        password: req.body.password
    }

    const { valid, errors} = validateLoginData(user)

    if(!valid) return res.status(400).json(errors)


    firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                return data.user.getIdToken();
            })
            .then(token=>{
                return res.json({ token })
            })
            .catch(err =>{
                console.error(err);
                if(err.code === 'auth/wrong-password'){
                    return res.status(403).json({general: 'Wrong credentials, please try again'})
                }else return res.status(500).json({error: err.code});
            })
}


// Add user details
exports.addUserDetails = (req,res) =>{
    let userDetails = reduceUserDetails(req.body);

    db.doc(`/users/${req.user.handle}`).update(userDetails)
        .then(() =>{
            return res.json({ message: 'Details added successfully'});
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code})
        })
}



// Get own user details
exports.getAuthUser = (req,res) =>{
    let userData = {}
    db.doc(`/users/${req.user.handle}`).get()
        .then((doc) => {
        if(doc.exists){
                userData.credentials =doc.data();
                return db.collection('comments')
                        .where('userHandle', '==', req.user.handle)
                        .get()
            } else{
                return true
            }
        })
        .then((data) => {
            userData.comments =[];
            data.forEach(doc =>{
                userData.comments.push(doc.data())
            });
            return db.collection('notifications').where('recipient', '==', req.user.handle)
                .orderBy('createAt', 'desc').limit(8).get()
        })
        .then(data =>{
            userData.notification= []
            data.forEach(doc =>{
                userData.notification.push({
                    recipient: doc.data().recipient,
                    sender: doc.data().sender,
                    createAt: doc.data().createAt,
                    feedId: doc.data().feedId,
                    type: doc.data().type,
                    read: doc.data().read,
                    notificationId: doc.id
                })
            })
            return res.json(userData)
        })
        .catch(err => {
            console.error(err)
            return res.status(500 .json({error:err.code}))
        })
}

exports.getUserDetails = (req,res)=>{
    let userData = {};

    db.doc(`/users/${req.params.handle}`).get()
        .then(doc => {
            if(doc.exists){
                userData.user =doc.data();
                return db.collection('feeds').where('userHandle', '==', req.params.handle)
                    .orderBy('createAt', 'desc')
                    .get();
            } else{
                return res.status(404).json({error: "User not found"})
            }
        })
        .then(data =>{
            userData.feeds = [];
            data.forEach(doc => {
                userData.feeds.push({
                    body: doc.data().body,
                    createAt: doc.data().createAt,
                    userHandle: doc.data().userHandle,
                    userImage: doc.data().userImage,
                    commentCount: doc.data().commentCount,
                    feedId: doc.id
                })
            })
            return res.json(userData);
        })
        .catch(err =>{
            console.error(err);
            return res.status(500).json({error: err.code})
        })
}



//Profile Image

exports.uploadImage = (req,res) =>{
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs =require('fs');

    const busboy = new BusBoy({ headers: req.headers})

    let imageFileName;
    let imageUploaded ={}

    busboy.on('file', (fieldName, file, filename, encoding, mimeType) =>{
        if(mimeType !== 'image/jpeg' && mimeType !== 'image/png'){
            return res.status(400).json({ error: 'Wrong file type submitted'})
        }
        const imageExtension= filename.split('.')[filename.split('.').length -1]
        imageFileName = `${Math.round(Math.random()*100000000000)}.${imageExtension}`;
        const filePath=path.join(os.tmpdir(), imageFileName);
        imageUploaded= {filePath, mimeType}
        file.pipe(fs.createWriteStream(filePath))

    });
    busboy.on('finish', () =>{
        admin.storage().bucket().upload(imageUploaded.filePath,{
            resumable: false,
            metadata:{
                metadata:{
                    contentType: imageUploaded.mimeType
                }
            }
        })
        .then(()=>{
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
            return db.doc(`users/${req.user.handle}`).update({imageUrl})
        })
        .then(()=>{
            return res.json({message: 'Image uploaded successfully'})
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code})
        })
    });
    busboy.end(req.rawBody)
}

//Header Image
exports.uploadHeaderImg = (req,res) =>{
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs =require('fs');

    const busboy = new BusBoy({ headers: req.headers})

    let imageHeaderFileName;
    let imageHeaderUploaded ={}

    busboy.on('file', (fieldName, file, filename, encoding, mimeType) =>{
        if(mimeType !== 'image/jpeg' && mimeType !== 'image/png'){
            return res.status(400).json({ error: 'Wrong file type submitted'})
        }
        const imageExtension= filename.split('.')[filename.split('.').length -1]
        imageHeaderFileName = `${Math.round(Math.random()*100000000000)}.${imageExtension}`;
        const filePath=path.join(os.tmpdir(), imageHeaderFileName);
        imageHeaderUploaded= {filePath, mimeType}
        file.pipe(fs.createWriteStream(filePath))

    });
    busboy.on('finish', () =>{
        admin.storage().bucket().upload(imageHeaderUploaded.filePath,{
            resumable: false,
            metadata:{
                metadata:{
                    contentType: imageHeaderUploaded.mimeType
                }
            }
        })
        .then(()=>{
            const headerUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageHeaderFileName}?alt=media`
            return db.doc(`users/${req.user.handle}`).update({headerUrl})
        })
        .then(()=>{
            return res.json({message: 'Header Image uploaded successfully'})
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code})
        })
    });
    busboy.end(req.rawBody)
}

exports.notificationsRead = (req,res) =>{
    let batch = db.batch();
    req.body.forEach(notificationId =>{
        const notification = db.doc(`/notifications/${notificationId}`);
        batch.update(notification, {read: true});
    })
    batch.commit()
        .then(()=>{
            return res.json({message: 'Notifications marked read'})
        })
        .catch(err =>{
            console.error(err)
            return res.status(500).json({error: err.code})
        })
}

exports.getAllUsers = ((req,res) =>{
    db.collection('users')
        .orderBy('createAt', 'desc')
        .get()
        .then(data =>{
        let users = [];
        data.forEach(doc =>{
            users.push({
                userId: doc.id,
                handle: doc.data().handle,
                createAt: doc.data().createAt,
                imageUrl: doc.data().imageUrl
            });
        })
        return res.json(users)
        })
        .catch(err => console.error(err))
})