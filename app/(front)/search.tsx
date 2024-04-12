'use client'

import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useSearchParams } from 'next/navigation';

const Search = () => {
  const [storeName, setStoreName] = useState('');
  const router = useRouter(); // Initialize useRouter
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/search', { name: storeName });

      if (response.status >= 200 && response.status < 300) {
        // Process the data received from the API
        console.log(response.data);

        if (!response.data.success) {
          alert('No store found');
        } else {
          // Open the specific store URL in a new window
          window.open(`/store/store?name=${response.data.store.name}`, '_blank', 'noopener,noreferrer');
          // Alert that store is found
          alert('Store found');
        }
      } else {
        throw new Error('Network response was not ok');
      }

      console.log(`success?`, response.data.success);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-around text-sm my-2 sm:text-md md:text-lg py-2 bg-blue-400 p-4 rounded-md w-full">
      <div>
        <input
          placeholder= {`enter T-shirt ID`}
          className='searchbar h-[2em]'
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          onKeyDown={handleKeyDown} // Call handleSearch on Enter key press
        />
        <button onClick={handleSearch}>
          <FcSearch className='scale-150 mx-2' />
        </button>
      </div>
    </div>
  );
};

export default Search;
