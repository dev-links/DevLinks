const functions = require('firebase-functions');
const express = require('express');
const app = express();
const { db }= require('./utility/admin')
const AuthFB = require('./utility/AuthFB')
const {signUp, login, uploadImage, addUserDetails, getAuthUser, getUserDetails, notificationsRead } = require('./handler/authController')
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
app.get(`/user`, AuthFB, getAuthUser)
app.post(`/user`, AuthFB, addUserDetails)
app.get(`/user/:handle`, getUserDetails)
app.post(`/notifications`,AuthFB, notificationsRead)



exports.api = functions.https.onRequest(app);

exports.createNotificationOnComment = functions.region('us-central1').firestore.document('comments/{id}')
    .onCreate((snapshot)=>{
       return db.doc(`/feeds/${snapshot.data().feedId}`).get()
            .then(doc => {
                if(doc.exists){
                    return db.doc(`/notifications/${snapshot.id}`).set({
                        createAt: new Date().toLocaleString(),
                        recipient: doc.data().userHandle,
                        sender:snapshot.data().userHandle,
                        type: 'comment',
                        read: false,
                        feedId: doc.id
                    })
                }
            })
            .catch(err =>{
                console.error(err)
            })
    })