import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="p-3 h-10 bg-sky-500 cursor-pointer hover:-translate-y-1 hover:scale-100 hover:font-semibold hover:text-white hover:bg-zinc-700 duration-300 ease-in-out duration-300">
              <SearchIcon className="-mt-2 h-full hover:h-11 hover:-mt-3 hover:shadow-2xl"/>
    </div>
  )
}

export default Search