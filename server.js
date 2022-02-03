const http = require('http')
const fs = require('fs')
const _ = require('lodash')
// this callback function triggers everytime a request is sent to a server
//  req includes data such as url, type of request (eg get, put)
//  res includes data to be sent to the user/browser
const server = http.createServer((req, res) => {
    console.log('request made')

    // lodash
    const num = _.random(0, 20)
    console.log(num)

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        // suppose there was a url which is now deleted and i want to redirect the user to another url - in this case /about
        // in that case we use the status code 301 and do the following
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;

        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        else {
            // res.write(data) //* we can skip this line and pass it in end itself. although if you want to add multiple things, you can use this method
            res.end(data)
        }
    })

    //* writing content
    // res.write('<p>hello world</p>')

    //* end the response so that it is sent to the browser
    // res.end()

})


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port no 3000')
}) //port no, domain name (localhost (127.0.0.1) is the default arg but written explicitly), callback function triggered when connected to the port
