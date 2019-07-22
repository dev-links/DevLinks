const functions = require('firebase-functions');
const express = require('express');
const app = express();
const { db }= require('./utility/admin')
const AuthFB = require('./utility/AuthFB')
const {signUp, login, uploadImage, addUserDetails, getAuthUser, getUserDetails, notificationsRead, uploadHeaderImg } = require('./handler/authController')
const {getAllFeeds, createFeed, getFeed, commentOnFeed, deleteFeed} = require('./handler/feeds')


// Feed endpoints
app.get(`/feeds`, getAllFeeds)
app.get(`/feed/:feedId`, getFeed)
app.post(`/feed`, AuthFB, createFeed)
app.post(`/feed/:feedId/comment`, AuthFB, commentOnFeed)
app.delete(`/feed/:feedId`, AuthFB, deleteFeed)

// Auth endpoints
app.post(`/signUp`, signUp)
app.post(`/login`, login)
app.post(`/user/image`, AuthFB, uploadImage)
app.post(`/user/header`, AuthFB, uploadHeaderImg)
app.get(`/user`, AuthFB, getAuthUser)
app.post(`/user`, AuthFB, addUserDetails)
app.get(`/user/:handle`, getUserDetails)
app.post(`/notifications`,AuthFB, notificationsRead)



exports.api = functions.https.onRequest(app);

exports.createNotificationOnComment = functions.region('us-central1').firestore.document('comments/{id}')
    .onCreate((snapshot)=>{
       return db.doc(`/feeds/${snapshot.data().feedId}`).get()
            .then(doc => {
                if(doc.exists && doc.data().userHandle !== snapshot.data().userHandle){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createAt: new Date().toLocaleString(),
                        recipient: doc.data().userHandle,
                        sender:snapshot.data().userHandle,
                        type: 'comment',
                        read: false,
                        feedId: doc.id
                    })
                } else {
                    return true
                }
            })
            .catch(err =>{
                console.error(err)
            })
    })

exports.onUserImageChange = functions.region('us-central1').firestore.document('/users/{userId}')
    .onUpdate((change) =>{
        console.log(change.before.data());
        console.log(change.after.data());
        if(change.before.data().imageUrl !== change.after.data().imageUrl){
            console.log('image has changed')
            let batch = db.batch()
        return db.collection('feeds').where('userHandle', '==', change.before.data().handle).get()
            .then(data =>{
                data.forEach(doc =>{
                    const feed = db.doc(`/feeds/${doc.id}`);
                    batch.update(feed, {userIamge: change.after.data().imageUrl})
                })
                return batch.commit()
            })
        } else return true;
    })

exports.onFeedDelete = functions.region('us-central1').firestore.document('/feeds/{feedId}')
    .onDelete((snapshot, context)=>{
        const feedId = context.params.feedId;
        const batch = db.batch();
        return db.collection('comments').where('feedId', '==', feedId).get()
                .then(data =>{
                    data.forEach(doc =>{
                        batch.delete(db.doc(`/comments/${doc.id}`));
                    })
                    return db.collection('notifications').where('feedId', '==', feedId).get()
                })
                .then(data =>{
                    data.forEach(doc =>{
                        batch.delete(db.doc(`/notifications/${doc.id}`))
                    })
                    return batch.commit();
                })
                .catch(err => console.error(err))
    })