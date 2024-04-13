'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Menumid from './Menumid'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'



const Header = ({}) => {
  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  useEffect(()=> {
    // const dataStores = async() => {
    //   const response = await axios.post(`/api/store/${localStorage.getItem('email')}/cred`, {
    //   email:'jasdj'
    // }) }

    // dataStores()
  },[])

  return (
    <header>
   <nav>
    <div className='navbar justify-between bg-base-300 '>
        <Link
        // href={'/'}
        href={name? `/store/store?name=${name}` : '/'}
        className='btn btn-ghost text-lg sm:block text-center justify-center  '>
        <h1 className='text-center justify-center'> {name? name : 'JMLinen'}</h1>
        {/* <h1> GensanSweets</h1> */}
        </Link>
        {/* <Menumid/> */}
        {/* <div className='flex items-center'>
        <h1> {name? name : ''}</h1></div> */}



       {/* <Menu /> */}
    </div>
   </nav>
   </header>
  )
}

export default Header
