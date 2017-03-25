var mongoose = require('mongoose');

module.exports = mongoose.model('contact', {
    text: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }
});