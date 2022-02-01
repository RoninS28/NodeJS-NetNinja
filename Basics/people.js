const people = ['mario', 'bunty', 'shaun', 'ronin']
const ages = [20, 25, 95, 17, 15]

// console.log(people)

//! with this line, we can return data to the importing file
// module.exports = people;

//! now in case of exporting multiple values, we export a dictionary
module.exports = {//here the names need not be the same
    people: people,
    ages: ages
}

// we can also code like this
// module.exports = {//here the names need not be the same
//     people,
//      ages
// }

// using inbuilt modules of nodejs
const os = require('os')
console.log(os.platform(), os.release, os.hostname, os.cpus)
