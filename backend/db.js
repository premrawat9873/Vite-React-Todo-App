const mongo = require("mongoose");
mongo.connect("mongodb+srv://premrawat9873:9873371160@prem.dei7zne.mongodb.net/todoapp")
const todoSchema =mongo.Schema({
    title: String,
    description: String,
    completed: Boolean,
})
const todoModel= mongo.model("Todo", todoSchema);
module.exports= {todoModel 
};  