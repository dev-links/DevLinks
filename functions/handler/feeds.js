const {db} = require('../utility/admin')

exports.getAllFeeds = ((req,res) =>{
    db.collection('feeds')
        .orderBy('createAt', 'desc')
        .get()
        .then(data =>{
        let feeds = [];
        data.forEach(doc =>{
            feeds.push({
                feedId: doc.id,
                body: doc.data().body,
                userHandle: doc.data().userHandle,
                createAt: doc.data().createAt,
                commentCount: doc.data().commentCount,
                userImage: doc.data().userImage
            });
        })
        return res.json(feeds)
        })
        .catch(err => console.error(err))
})

exports.getFeed = ((req,res) =>{
    let feedData ={};
    db.doc(`/feeds/${req.params.feedId}`).get()
        .then(doc =>{
            if(!doc.exists){
                res.status(404).json({error: 'feed not found'})
            }
            feedData = doc.data();
            feedData.feedId= doc.id;
            return db.collection('comments').orderBy('createAt', 'desc').where('feedId','==', req.params.feedId).get()
        })
        .then(data =>{
            feedData.comments= [];
            data.forEach(doc =>{
                feedData.comments.push(doc.data())
            })
            return res.json(feedData);
        })
        .catch(err =>{
            console.error(err);
            res.status(500).json({error: err.code})
        });
})


exports.createFeed = ((req,res) =>{
    const newFeed ={
        body: req.body.body,
        userHandle : req.user.handle,
        // userImage: req.user.imageUrl,
        createAt : new Date().toLocaleString(),
        commentCount: 0
    }

    db.collection('feeds')
        .add(newFeed)
        .then(doc =>{
            const resFeed = newFeed
            resFeed.feedId = doc.id
            return res.json(resFeed)
        })
        .catch(err =>{
            res.status(500).json({error: 'Something went wrong'})
            console.error(err)
        })
})

exports.commentOnFeed = (req,res) => {
    if(req.body.body.trim() === '') return res.status(400).json({ comment: 'Must not be empty'})

    const newComment = {
        body: req.body.body,
        createAt: new Date().toLocaleString(),
        feedId: req.params.feedId,
        userHandle: req.user.handle,
        userImage: req.user.imageUrl
    }

    db.doc(`/feeds/${req.params.feedId}`).get()
        .then(doc => {
            if(!doc.exists){
                return res.status(404).json({error: 'Feed not found'})
            }
            return doc.ref.update({commentCount: doc.data().commentCount + 1})
        })
        .then(() =>{
            return db.collection('comments').add(newComment)
        })
        .then(() =>{
            return res.json(newComment)
        })
        .catch(err =>{
            console.error(err)
            res.status(500).json({error: 'Something is wrong'})
        })
}

//Delete Feed
exports.deleteFeed = (req,res) =>{
    const document = db.doc(`/feeds/${req.params.feedId}`)

    document.get()
        .then(doc =>{
            if(!doc.exists){
                return res.status(403).json({error: 'Feed not found'})
            }
            if(doc.data().userHandle !== req.user.handle){
                return res.status(403).json({error : 'Unauthorized'})
            } else{
                return document.delete();
            }
        })
        .then(()=>{
            return res.json({ message: 'Feed delete successfully'})
        })
        .catch( err =>{
            console.error(err)
            return res.status(500).json({ error: err.code})
        })
}