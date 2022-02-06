const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')




//* express app
const app = express()


// connect to mongodb
// password contains special character '@' and hence we put in the hex value of it else, it gives an error
const dbURI = 'mongodb+srv://bunty:bunty@nodejstut.wgjmz.mongodb.net/node-tuts?retryWrites=true&w=majority'
// this is an async method, which gives back a promise, which is why we invoke the then() method
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //* arg2 is to remove the deprecation warnings
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
//* register view engine
app.set('view engine', 'ejs')

//* by default view taps the files in the view folder
//* in case you have the ejs files in any other folder, you can change it by
// app.set('views', 'myviews')

//* listen for requests
// app.listen(3000)

// * Middleware
// app.use((req, res, next) => {
//     console.log('new request made:')
//     console.log('host :', req.hostname)
//     console.log('path :', req.path)
//     console.log('method :', req.method)
//     //* after the use method, the server does not know what to do next. hence we invoke the next method to tell them to proceed with the underlying code
//     next()
// })


// * Middleware 2
// app.use((req, res, next) => {
//     console.log('in the next middleware')
//     next()
// })

// middleware and static files

// if you try to access a css file in inspect element -> network, it is not available and gives a 404 error
// thus anything in the folder mentioned as an arg is made static i.e public
app.use(express.static('public'))

// app.use(morgan('tiny'))



app.get('/', (req, res) => {
    res.redirect('/blogs')
})


app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })
})

// ? BLOGS

app.get('/blogs', (req, res) => {
    // const blog = new Blog({
    //     title: 'blog2',
    //     snippet: 'snippet2',
    //     body: 'body2'
    // })
    // blog.save()
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })

        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
})



//* 404 page
//* since there is no url, when the compiler reaches this part of the code, it will be executed - and thus we use 'use'
// ! should be at the very bottom
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' })

})