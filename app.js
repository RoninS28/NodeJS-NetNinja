const express = require('express')

// express app
const app = express()

// listen for requests
app.listen(3000)



app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    // by default, sendFile checks for absolute path. thus in arg2 we explicitly mention the root which is the relative path
    res.sendFile('./views/index.html', { root: __dirname })
})


app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})


// Redirects
app.get('/info', (req, res) => {
    res.redirect('/about')
})


// 404 page
// since there is no url, when the compiler reaches this part of the code, it will be executed - and thus we use 'use'
// ! should be at the very bottom
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })

})