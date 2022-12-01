const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({

    services:{
        type:String,
        required:true
    }




})

module.exports = mongoose.model('services', servicesSchema);