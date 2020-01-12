const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model('Suscription', mySchema);

module.exports = model;