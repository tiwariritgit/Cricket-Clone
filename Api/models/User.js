const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min: 3,
        max: 20,
        unique: true,

    },

    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    },

    password:{
        type: String,
        required: true,
        min: 6,

    },

    isAdmin:{
        type:Boolean,
        default: false,

    },

},

{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);