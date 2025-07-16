import { useState } from 'react';
import { useEffect } from 'react';
import {Link, useNavigate, useParams } from 'react-router';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';
import api from '../lib/axios.js';
import toast from 'react-hot-toast';


const NoteDetailPage = () => {
  const [note,setNote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [saving,setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // console.log({id});

  useEffect(() =>{
    const fetchNote = async () => {
      try {
          const res = await api.get(`/notes/${id}`);
          setNote(res.data);
      } catch (error) {
        console.log("error in fetching note", error);
        toast.error("Fail to fetch the note");
      } finally{
          setLoading(false);
      }
    };

    fetchNote();
  },[id]);
  
  console.log({ note });

  const handleDelete = async () =>{
    if(!window.confirm("Are you sure you want to delete this note?")) return;
     try {
          await api.delete(`/notes/${id}`);
          toast.success("Note deleted successfully!");
          navigate("/");
        } catch (error) {
        console.log("Error in the handleDelete",error);
        toast.error("Failed to delete the note");
        }
  };  

  const handleSave = async () => {
    if ( !note.title.trim() || !note.content.trim()) {
    toast.error("Please add the required fields!");
    return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-info btn-outline text-pretty">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-info btn-outline text-pretty">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
            
            <div className='card  border-2 border-info '>
              <div className='card-body'>
                  <div className='form-control mb-4 '>
                    <label className='label'>
                      <span className='label-text'>Title</span>
                    </label>
                    <input type="text" placeholder="Note Title" className="input input-bordered  border-info/40 bg-slate-900"
                           value={note.title}
                           onChange={(e) => setNote({...note, title: e.target.value})}
                    />
                  </div>

                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Content</span>
                    </label>
                    <textarea placeholder="Write your note here" 
                              className="textarea textarea-bordered border-info/40 h-32  bg-slate-900"
                              value={note.content}
                              onChange={(e) => setNote({...note, content: e.target.value})}
                    />
                  </div>

                  <div className='card-actions justify-end'>
                      <button className='btn btn-info' disabled={saving} onClick={handleSave}>
                        {saving ? "Saving..." : "Save Changes"}
                      </button>
                  </div>
              </div>  
            </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;

