import React from 'react'
import { Link } from 'react-router'
import { PlusIcon, SearchIcon } from 'lucide-react'

const Navbart = ({ searchQuery, onSearchChange, showSearch }) => {
  return (
    <header className='bg-base-300 border-base-content/10'>

      {/* Center content and limit width */}
      <div className='mx-auto max-w-6xl p-4'>

        {/* FLEX CONTAINER Places: Logo | Search Bar | Button*/}
        <div className='flex items-center justify-between gap-4'>
          <h1 className='text-3xl font-bold text-accent font-mono tracking-tight shrink-0'>
            Inkdrop
          </h1>

          {/* SEARCH BAR - Only visible when showSearch is true */}
          {showSearch && (
            <div className="relative flex-1 max-w-md">  {/* relative needed for absolute-positioned icons/buttons */}
              {/* Search icon inside input */}
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content/40"
              />


              {/*SEARCH INPUT - Controlled input component */}
              <input
                type="text"
                placeholder="Search notes..."
                className="input input-bordered w-full pl-10 bg-base-200"
                value={searchQuery}         // Current search text
                onChange={(e) => onSearchChange(e.target.value)}  // Update parent state when typing
              />


              {/* CLEAR SEARCH BUTTON - Only visible when input has text */}
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content"
                  onClick={() => onSearchChange("")}       // Clear search input
                >
                  ✕
                </button>
              )}
            </div>
          )}

          <Link
            to={"/create"}
            className='btn btn-accent brightness-110 rounded-xl shrink-0'>
            <PlusIcon className='size-5' />
            <span>New Note</span>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbart