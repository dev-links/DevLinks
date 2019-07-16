const functions = require('firebase-functions');
const express = require('express');
const app = express();
const { db }= require('./utility/admin')
const AuthFB = require('./utility/AuthFB')
const {signUp, login, uploadImage} = require('./handler/authController')
const {getAllFeeds, createFeed} = require('./handler/feeds')



app.get(`/feeds`, getAllFeeds)
app.get(`/feed/feedId`)
app.post(`/feed`, createFeed)

// Auth endpoints
app.post(`/signUp`, signUp)
app.post(`/login`, login)
app.post(`/user/image`, AuthFB, uploadImage)



exports.api = functions.https.onRequest(app);