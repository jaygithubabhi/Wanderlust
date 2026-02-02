const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose").default;

//When we use require() on some modern packages, instead of returning a function directly, it returns an object whose key is default, and the value of default is the actual function.

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
})

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userSchema);