const express = require('express')

//* express app
const app = express()

//* register view engine
app.set('view engine', 'ejs')

//* by default view taps the files in the view folder
//* in case you have the ejs files in any other folder, you can change it by
// app.set('views', 'myviews')

//* listen for requests
app.listen(3000)



app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    //* by default, sendFile checks for absolute path. thus in arg2 we explicitly mention the root which is the relative path
    // res.sendFile('./views/index.html', { root: __dirname })
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs })
    //* here arg2 is an object  which is a map. these attributes can be accessed in the ejs file
})


app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
})


// //* Redirects
// app.get('/info', (req, res) => {
//     res.redirect('/about')
// })


//* 404 page
//* since there is no url, when the compiler reaches this part of the code, it will be executed - and thus we use 'use'
// ! should be at the very bottom
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' })

})