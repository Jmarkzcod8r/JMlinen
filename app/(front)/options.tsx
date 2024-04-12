'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Import Axios
import Swal from 'sweetalert2'; // Import SweetAlert2

function DropdownExample() {
    const [copied, setCopied] = useState(false); // State to track if ID is copied

    // Function to copy text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true); // Set copied state to true
                setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
            });
    };

    const [formData, setFormData] = useState({
        size: 'S',
        width: '',
        height: '',
        firstName: '',
        lastName: '',
        remarks: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedFormData = {
            ...formData,
            [name]: value
        };

        // If the changed input is not size, update formData with the new value
        if (name !== 'size') {
            setFormData(updatedFormData);
        } else {
            // If the changed input is size, calculate and update width and height based on the selected size
            let width, height;
            switch (value) {
                case 'XS':
                    width = 20;
                    height = 27;
                    break;
                case 'S':
                    width = 21;
                    height = 28;
                    break;
                case 'M':
                    width = 22;
                    height = 29;
                    break;
                case 'L':
                    width = 23;
                    height = 30;
                    break;
                case 'XL':
                    width = 24;
                    height = 31;
                    break;
                case 'XXL':
                    width = 25;
                    height = 32;
                    break;
                default:
                    width = 0;
                    height = 0;
            }
            setFormData({
                ...updatedFormData,
                width,
                height
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to /api/T-shirt-size with form data
            const response = await axios.post('/api/T-shirt-size', formData);
            console.log(response.data); // Log response data

            // Function to copy text to clipboard
            const copyToClipboard = (text) => {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'ID Copied!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch((error) => {
                        console.error('Error copying to clipboard:', error);
                    });
            };

            // Display a SweetAlert2 pop-up with the ID of the object from the response data and a copy icon
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                html: `<div>
                        <img src='/images/T-shirt.png' className='w-[2em] h-[1em]' />

                           <br/> <span>name: ${response.data.newTshirt.firstName}</span>
                           <span>${response.data.newTshirt.lastName}</span>
                           <br/> <span>width: ${response.data.newTshirt.width}" (in)</span>
                           <span>height: ${response.data.newTshirt.height}" (in)</span>
                           <br/> <span>remarks: ${response.data.newTshirt.remarks}</span>
                           <br/><span>ID: ${response.data.newTshirt._id}</span>
                        </div>`
            });
        } catch (error) {
            console.error('Error:', error); // Log any errors
        }
    };
    const { size, width, height, firstName, lastName, remarks } = formData;

    return (
        <form onSubmit={handleSubmit} className="w-full rounded-box mt-4 p-2 min-h-[15em] bg-blue-200 z-0 grid grid-cols-1 sm:grid-cols-3">
            <div className=" sm:w-full w-[16em] flex justify-around p-1">
                <Image src='/images/T-shirt.png' alt={''} width={200} height={150} className='rounded-md'/>
            </div>
            <div className='p-3 bg-blue-100 text-center rounded-md'>
                <div>
                    <h2>Width (inches):</h2>
                    <h2 className=''>{width}</h2>
                </div>
                <div>
                    <h2>Height (inches):</h2>
                    <h2 className=''>{height}</h2>
                </div>
                <select className='bg-blue-300 mt-1 w-[5em]' name="size" value={size} onChange={handleInputChange}>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                    <option value='XXL'>XXL</option>
                </select>
            </div>
            <div className='p-2'>
                <h3>First Name</h3>
                <input className='max-w-[14em]' name="firstName" value={firstName} onChange={handleInputChange} />

                <h3>Last Name</h3>
                <input className='max-w-[14em]' name="lastName" value={lastName} onChange={handleInputChange} />

                <h3>Remarks</h3>
                <textarea name="remarks" value={remarks} onChange={handleInputChange} />

                <div className="flex justify-center">
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default DropdownExample;
