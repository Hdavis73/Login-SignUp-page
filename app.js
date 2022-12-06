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
// class CurrentUser {
//     constructor(firstName,lastName,id,username){
//         this.firstName = firstName,
//         this.lasName = lastName,
//         this.username = username,
//         this.id = id
//     }

//     userInfo(){
//         console.log(this)
//     }
// }


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

    // let userId

    User.findOne({username:username})
        .then((userInfo) => {
        // const currentUser = new CurrentUser(userInfo.firstName, userInfo.lastName, userInfo._id, userInfo.username)

            if(userInfo) userInfo.password === password ? res.redirect('') : res.render('incorrectPassword')

            // if(userInfo) {
            //     if(userInfo.password === password) {
            //      currentUser
            //     }
            //     else res.render('incorrectPassword')
            // }
            else res.render('userDoesNotExistErr')

        })

        res.redirect('/userProfile:id')
    // res.render('userProfile')
})

// app.get(`/userProfile/:id`,(req,res) => {
//     // const id = req.query
//     // CurrentUser.userInfo()
//     res.render('userProfile')
//     // console.log(req.query.id)
// })

app.post('/userProfile', (req,res) => {

})

app.get('/userProfile',(req,res) => {
    const username = req.query.username
    const password = req.query.password

    User.findOne({username:username})
    .then((userInfo) => {
        if(userInfo) {

           if (userInfo.password === password) res.render('userProfile',{userInfo: userInfo, title: userInfo.firstName + ' ' + userInfo.lastName}) 
           else res.render('incorrectPassword')

        } else res.render('userDoesNotExistErr')

    })

    console.log(req.query)
    // res.render('userProfile')
})

app.get('/changePassword', (req,res) => {
    const username = req.query.username
    const password = req.query.password

    User.findOne({ username:username })
        .then((userInfo) => {
            if(userInfo.password === password) res.render('changePassword')
            else console.log('incorrect password')
        })
})