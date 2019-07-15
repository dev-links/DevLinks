require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    app = express(),
    {signUp} = require('../handler/authController'),
    {helloWorld} =require('../index'),
    { PORT, SESSION_SECRET } = process.env;

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2 // 2 days
    }
}))

app.use(express.json())


// authController 
app.post(`/signUp`, signUp)
app.get(`/api/hello`, helloWorld)

app.listen(PORT, () => {
    console.log(`${PORT} is listening`)
})