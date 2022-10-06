const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DjezzySchema = new Schema({
    PhoneNumber :{
        type: Number,
        required:true
    },
    Amount:{
        type: Number,
        required: true
    },
    Fees:{
        type: Number,
        required:true
    },

}, {timestamps:true});

module.exports = mongoose.model('Djezzy', DjezzySchema);