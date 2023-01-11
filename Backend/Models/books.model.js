const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    Image_url:String,
    Title:String,
    Author_name:String,
    Price:Number,
    Rating:Number
})

const BookModel=mongoose.model("crousal",bookSchema)

module.exports={BookModel}
