const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    "username": {
       type: String,
       require:true
        },
    "password": {
        type:String,
        require: true

        }

});


module.exports = User = mongoose.model('user', UserSchema)