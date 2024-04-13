'use client'

import React, { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';

const Search = () => {
  const [id, setID] = useState('');
  const router = useRouter(); // Initialize useRouter
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'T-shirt ID copied to clipboard'
        });
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to copy T-shirt ID to clipboard'
        });
      });
  }


  const handleSearch = async (id) => {
    try {
        const response = await axios.post('/api/T-shirt-size/search', { _id: id });

        if (response.status >= 200 && response.status < 300) {
            // Process the data received from the API
            console.log(response.data);

            if (response.data && response.data.tshirt) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    html: `<div>
                                <img src='/images/T-shirt.png' className='w-[2em] h-[1em]' />
                                <br/>
                                <span>name: ${response.data.tshirt.firstName} ${response.data.tshirt.lastName}</span>
                                <br/>
                                <span>size: ${response.data.tshirt.size} </span>
                                <span>width: ${response.data.tshirt.width}" (in)</span>
                                <span>height: ${response.data.tshirt.height}" (in)</span>
                                <br/>
                                <span>remarks: ${response.data.tshirt.remarks}</span>
                                <br/>
                                <span>ID: ${response.data.tshirt._id}</span>
                            </div>`,
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Copy Link',
                    cancelButtonText: 'OK',
                    showConfirmButton: true,
                    preConfirm: () => {
                        const currentURL = window.location.href;
                        const urlWithoutQuery = currentURL.split('?')[0];
                        copyToClipboard(`${urlWithoutQuery}?q=${response.data.tshirt._id}`);
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No T-shirt Found',
                    text: 'No T-shirt found with the provided ID.'
                });
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
      handleSearch(id);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);


  return (
    <div className="flex justify-around text-sm my-2 sm:text-md md:text-lg py-2 bg-blue-400 p-4 rounded-md w-full">
      <div>
      <input
  placeholder={`Enter T-shirt ID`}
  className='searchbar h-[2em] w-[14em] sm:w-[20em] text-center'
  value={id}
  onChange={(e) => setID(e.target.value)}
  onKeyDown={handleKeyDown} // Call handleSearch on Enter key press
/>

<button onClick={() => handleSearch(id)}>
          <FcSearch className='scale-150 mx-2' />
        </button>
      </div>
    </div>
  );
};

export default Search;
