import Note from "../models/Note.js";
// using arrow function
/* 
  export const getAllNotes = (req, res) => {
    res.status(200).send("you've just fecth the notes.");        
 }
 */

// making a normal function
export async function getAllNotes(_,res){           // as we're not using a var like req here we can just replace it by a "_"
    try {
        const notes = await Note.find().sort({createdAt: -1});      // get the latest note use -1 in sort in createdAt . by default it is 1
        res.status(200).json(notes);
        console.log("notes fetched");
    } catch (error) {
        console.error("error in getAllNotes controller")
        res.status(500).json({message: "Internal server error"})
    }
}

export async function getNoteById(req,res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"note not found"});
        res.json(note);
    } catch (error) {
         console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
    
}


export async function createNote(req,res){
    try {
        const {title,content} = req.body;
        const note = new Note({title,content});
        console.log("Received data:", req.body);
        const savedNote = await note.save();
        res.status(201).json(savedNote);  
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }  
}

export async function updateNote(req,res){
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(   // id word can be any it must match the route parameter , 
            req.params.id,
            {title,content},
            {new: true, }
        );        

        if(!updatedNote) return res.status(404).json({message:"note not found"});

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
   
}

export async function deleteNote(req,res){
    try {
        const delnote = await Note.findByIdAndDelete(req.params.id)
        if(!delnote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({message:"note deleted successfully"});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}
