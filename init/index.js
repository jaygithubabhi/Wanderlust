const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';
main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log("error in connection to db")
    console.log(err)
})
async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({
        ...obj,
        owner:"696a498e1b7cf563f25fc64a"
    }))
    await Listing.insertMany(initdata.data);
    console.log("data was initialized")
}

initDB();