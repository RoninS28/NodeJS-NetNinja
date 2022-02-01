const fs = require('fs')

const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' })
const writestream = fs.createWriteStream('./docs/blog4.txt')


//* in stream, we get parts of data slowly so that we can start using the data
// readstream.on('data', (chunk) => { //here we access the small amount of 'data' we read from the file and then in the callback function pass it as chunk
//     console.log('****new chunk*******')
//     //* console.log(chunk.toString()) //*we can eliminate the toString by passing the encoding format
//     console.log(chunk)
//     writestream.write('\nNEW CHUNK\n')
//     writestream.write(chunk)

// })

// instead of writing a code for chunks and writing it to the file we can do this directly
readstream.pipe(writestream) //with this method, as the chunks come in, they are directly written to the file to be written in
