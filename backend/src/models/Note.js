import mongoose from "mongoose";

// 1st Step- You need to create a schema
// 2nd Step- You would create model based of that schema
// title,content are part of 1 oject , timestamp other object created

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required : true,
    },
    content: {
        type:String,
        require:true,
    },   
},
{ timestamps : true }       // createdAt,updatedAt fiilds 
);

const Note =mongoose.model("Note",noteSchema);

export default Note;
