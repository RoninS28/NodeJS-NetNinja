const fs = require('fs') //file system
const { syncBuiltinESMExports } = require('module')

//* all the fs functions are async by default. if you want them to be syncBuiltinESMExports, i.e block the following code
//* then choose the funcNameSync one

//! reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// ! writing files
// fs.writeFile('./docs/blog1.txt', 'hello world\n hello hello', () => {
//     console.log("file was written")
// })
// fs.writeFile('./docs/blog2.txt', 'hello world\n hello hello', () => { //if the file does not exist, it creates a new one
//     console.log("file was written")
// })

//* arg1 is filename, arg2 is text to overwrite, arg3 is the function which executes after writing is done

// ! directories

// if (!fs.existsSync('./assets')) {
//     //* this below function throws an error if the directory already exists
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder created')
//     })

// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('directory deleted')
//     })
// }

// ! deleting files
if (fs.existsSync('./docs/blog2.txt')) {
    fs.unlink('./docs/blog2.txt', (err) => {
        if (err) {
            console.log('err')
        }
        console.log('file deleted')
    })
}

