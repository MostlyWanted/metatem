const mongoose = require('mongoose');

const ourworkSchema = new mongoose.Schema({

    ourwork:{
        type:String,
        required:true
    }




})

module.exports = mongoose.model('ourwork', ourworkSchema);