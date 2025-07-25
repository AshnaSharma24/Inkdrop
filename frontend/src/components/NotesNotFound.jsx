import { NotebookIcon } from 'lucide-react';
import {Link} from "react-router";

const NotesNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
        <div className='bg-accent/20 rounded-full p-10'>
            <NotebookIcon className='size-10 text-accent'/>
        </div>
        <h3 className='text-2xl font-bold'>No notes created yet</h3>
        <p className='text-base-content/70'>
            Ready to jont down your thoughts or ideas? Create your first note to get started on your journey.
        </p>
        <Link to="/create" className='btn btn-accent' >Create Your First Note</Link>
    </div>
  );
};

export default NotesNotFound
