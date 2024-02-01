import React, {useEffect, useState} from 'react'
import { fetchData, animeOptions } from '../utils/fetchData'
export default function Search() {
    const [search, setSearch] = useState("");
  
    const handleSearch = async () => {
      if (search) {
        try {
          const animeData = await fetchData(
            'https://myanimelist.p.rapidapi.com/anime/52992',
            animeOptions
          );

         
  
          console.log(animeData);
        } catch (error) {
          console.error('Error fetching anime data:', error);
        }
      }
    };
  
    return (
      <>
        <div className="flex flex-col items-center justify-center my-6 p-3">
          <h1>Search Anime</h1>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              className="w-full md:w-64 lg:w-96 border rounded px-3 my-3 py-2 bg-gray-100 focus:outline-none focus:border-gray-100"
              placeholder="Enter your text"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              typeof="text"
            />
          </div>
          <button
            onClick={handleSearch}
            className="relative z-10 inline-flex lg:w-96 items-center justify-center w-full px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 my-2"
          >
            Search
          </button>
        </div>
      </>
    );
  }
  
