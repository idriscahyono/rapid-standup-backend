const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://rapidstandup:1641720184ID@cluster0-uynat.mongodb.net/test?retryWrites=true&w=majority'

).then(function () {
    console.log('connected')
}).catch(function (e) {
    console.log(e)
})