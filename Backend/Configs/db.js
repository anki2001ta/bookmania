
const mongoose=require("moongose")

const connection = mongoose.connect("mongodb+srv://root:root@cluster0.bjlngoy.mongodb.net/bookstore?retryWrites=true&w=majority")

module.exports={connection}
