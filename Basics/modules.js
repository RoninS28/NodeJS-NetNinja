// var xyz = require('./people') //!this line executes the code of the file mentioned

// const {people} = require('./people') //!this will only access the people attbiute of the object returned from the imported file
const { people, ages } = require('./people') //!this will only access the people attbiute of the object returned from the imported file

//! if the file returns anything, it is displayed in this console.log
//! this is achieved through module.exports
// console.log(`Exported data is ${xyz}`)
console.log(people, ages)