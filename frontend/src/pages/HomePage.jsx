import { useEffect, useState } from 'react'
import Navbart from '../components/Navbart'
import RateLimitedUI from '../components/RateLimitedUI';
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound.jsx';
import { fetchAllNotes } from '../lib/notes.js'; // import from API layer

// Skeleton card that matches NoteCard's dimensions
const NoteCardSkeleton = () => (
  <div className="card border-t-4 border-t-accent animate-pulse">
    <div className="card-body">
      <div className="h-5 bg-base-300 rounded w-3/4 mb-3" />
      <div className="h-3 bg-base-300 rounded w-full mb-2" />
      <div className="h-3 bg-base-300 rounded w-5/6 mb-2" />
      <div className="h-3 bg-base-300 rounded w-2/3 mb-4" />
      <div className="card-actions justify-between items-center mt-2">
        <div className="h-3 bg-base-300 rounded w-20" />
        <div className="h-6 bg-base-300 rounded w-6" />
      </div>
    </div>
  </div>
);


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const data = await fetchAllNotes(); // clean, no axios details here
        setNotes(data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

 return (
    <div className='min-h-screen'>
      <Navbart />
      {isRateLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Array.from({ length: 6 }).map((_, i) => (
              <NoteCardSkeleton key={i} />
            ))}
          </div>
        )}
        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}
        {!loading && notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage