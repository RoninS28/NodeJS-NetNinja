const mongoose = require('mongoose')
const schema = mongoose.Schema

const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })


// the arg1 in model is the singular noun of the name of the collection
// i.e here we are passing the word Blog, so mongoose automatically looks for blogs collection in the database
// arg2 is the schema on which we want to extract the document
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog

