import React, {  useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = import.meta.env.API_BASE_URL;




const Search = ({ searchTerm, setSearchTerm }) => {



  return (
    <div className='flex justify-center '>
        <div className='flex gap-2  items-center border  w-[330px]  border-gray-400 rounded-md'>
              <IoIosSearch color='white'  style={{marginLeft:10}}/>
            <input type='text'  placeholder='Search Movies' 
                  className="text-white ml-3 w-full h-9 px-2 font-light placeholder:font-light placeholder:text-gray-400 border-none focus:outline-none"
             value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
    </div>
  )
}

export default Search
