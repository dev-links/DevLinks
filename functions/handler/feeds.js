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
    
})


exports.createFeed = ((req,res) =>{
    const newFeed ={
        body: req.body.body,
        userHandle : req.body.userHandle,
        // userImage: req.user.imageUrl,
        createAt : new Date().toLocaleString(),
        commentCount: 0
    }

    db.collection('feeds')
        .add(newFeed)
        .then(doc =>{
            const resFeed = newFeed
            resFeed.feedId = doc.id
            res.json(resFeed)
        })
        .catch(err =>{
            res.status(500).json({error: 'Something went wrong'})
            console.error(err)
        })
})