import { useEffect, useState } from 'react'
import Navbart from '../components/Navbart'
import RateLimitedUI from '../components/RateLimitedUI';
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound.jsx';
import { fetchAllNotes } from '../lib/notes.js';
import { SearchIcon } from 'lucide-react';

// Skeleton Loader Component = Displays placeholder cards while notes are loading
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
  // STATE VARIABLES
  const [isRateLimited, setIsRateLimited] = useState(false);  // Tracks whether API rate limit is exceeded
  const [notes, setNotes] = useState([]);                     // Stores all notes fetched from backend
  const [loading, setLoading] = useState(true);               // Controls loading state/skeleton visibility
  const [searchQuery, setSearchQuery] = useState("");         // Stores text typed into search bar

  // FETCH NOTES WHEN COMPONENT MOUNTS =  Runs only once because dependency array is []
  useEffect(() => {
    // Async function to fetch notes
    const loadNotes = async () => {
      try {
        const data = await fetchAllNotes();   // Fetch notes from API
        setNotes(data);                       // Save notes into state
        setIsRateLimited(false);              // Reset rate-limit state if request succeeds

      } catch (error) {
        if (error.response?.status === 429) {     // Handle Too Many Requests error
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes.");    // Show generic error message
        }
      } finally {
        setLoading(false);    // Stop loading skeletons
      }
    };
    loadNotes();     // Call function to fetch notes
  }, []);


  //  FILTER NOTES BASED ON SEARCH QUERY = Derived state → recalculated every render
  const filteredNotes = notes.filter((note) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;                        // Empty search → show all notes
    // Match title OR content
    return (
      note.title.toLowerCase().includes(q) ||
      note.content.toLowerCase().includes(q)
    );
  });


  return (
    <div className='min-h-screen'>

      {/* NAVBAR Pass search-related props to Navbar*/}
      <Navbart
        showSearch={!loading && notes.length > 0 && !isRateLimited}
        searchQuery={searchQuery}         // Current search text
        onSearchChange={setSearchQuery}   // Function to update search state
      />


      {/* RATE LIMIT UI - Displayed when backend rate limit is hit*/}
      {isRateLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {/*  LOADING STATE = Show skeleton cards while data is loading*/}
        {loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Generate 6 skeleton cards */}
            {Array.from({ length: 6 }).map((_, i) => (
              <NoteCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/*  EMPTY STATE -  No notes exist in database */}
        {!loading && notes.length === 0 && !isRateLimited && (
          <NotesNotFound />
        )}

        {/*NO SEARCH RESULTS - Notes exist but none match search query*/}
        {!loading && notes.length > 0 && filteredNotes.length === 0 && (
          <div className="text-center py-16 text-base-content/50">
            <SearchIcon className="size-10 mx-auto mb-3 opacity-30" />
            {/* Message */}
            <p className="text-lg">
              No notes match "
              <span className="text-accent">
                {searchQuery}
              </span>"
            </p>

            {/* Clear search button */}
            <button
              className="btn btn-ghost btn-sm mt-3"
              onClick={() => setSearchQuery("")}  // Reset search query
            >
              Clear search
            </button>
          </div>
        )}

        {/*  NOTES GRID - Render filtered notes*/}
        {!loading && filteredNotes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Loop through filtered notes */}
            {filteredNotes.map(note => (
              <NoteCard
                key={note._id}
                note={note}
                // Pass setNotes so child can update notes
                setNotes={setNotes}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default HomePage