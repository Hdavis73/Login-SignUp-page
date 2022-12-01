// const http = require('http')
const mongoose = require('mongoose')
// const passportLocalMongoose = require('passport-local-mongoose')
// const session = require('express-session')
// const passport = require('passport')
// const bodyParser = require('body-parser')
// const connectEnsureLogin = require('connect-ensure-login')
const express = require('express')
const app = express()
const User = require('./models/userInfo')
// const { findByUsername } = require('./models/userInfo')

const dbUrl = 'mongodb+srv://Hdavis73:Heather1@logininfo.zv7mcrt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('connected to the database'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.listen(4000)

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/signup', (req,res) => {
    res.render('SignUp')
})

app.post('/userData', (req,res) => {

    const {firstName,lastName,username,password} = req.body
//check if all inputs are filled out and render error page if not
    if(!firstName || !lastName || !username || !password) res.render('fillAllInputsErr')
    else checkExistingUsers()

//check database for given username and render error page if username already exists
    function checkExistingUsers(){
        User.findOne({username:username})
         .then((savedUser) => {
                if(savedUser) res.render('userAlreadyExistsErr')
                else createUser()
        })
    }
//if there are no conflicts, create a new user in the database
    function createUser() {
        const user = new User(req.body)

        user.save()
            .then(data => {
             res.redirect('/')
         })
    }
})

app.post('/userProfile', (req,res) => {
    const {username,password} = req.body
    let userId

    User.findOne({username:username})
        .then((userInfo) => {

            if(userInfo) userInfo.password === password ? userId = userInfo._id : console.log('wrong password')
            else console.log('user does not exist')

        })

    res.redirect('/')
    // res.render('userProfile')
})