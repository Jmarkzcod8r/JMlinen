// "use client"
/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
// import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Swal from 'sweetalert2';
// import { useEffect } from 'react'
import DropdownExample from './options'

import brownies from 'brownies.jpeg'
import axios from 'axios';
import search from './search'
import Search from './search'

// export const metadata: Metadata = {
//   title: process.env.NEXT_PUBLIC_APP_NAME || 'GenShop',
//   description:
//     process.env.NEXT_PUBLIC_APP_DESC ||
//     'Nextjs, Server components, Next auth, daisyui, zustand',
// }

export default async function Front() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest(7)
  const sampleProducts = [{name:'productt1', color:'red', price:20, image:'../../public/images/brownies.jpeg'},{name:'productt2', color:'gray',price:206, image:''}]

  // if (typeof window == "undefined") { window.location.reload()}

  // const getStores = async() => {
  //   try{
  //     const resStores = await axios.get(`api/store/${localStorage.getItem('id')}`)
  //     console.log(`resSores: `, resStores)
  //   } catch (eror) {
  //     console.error
  //   }
  // }

  // useEffect(()=> {
  //   getStores()
  // })


  return (
    <>
    <div className='bg-black-200'>

      <div className="w-full carousel rounded-box mt-4 bg-pink-400 z-0 p-1">
      <img src='/images/JMLinen2.png' className="max-w-full" alt={''} />
      </div>
                <Search/> {/* This component utilizes `use client` which is contained only for its use */}

                <div className="w-full rounded-box mt-4 p-2 bg-pink-400 z-0 grid grid-ccols-2 sm:grid-cols-3">

    <div className=" sm:w-full w-[16em] flex justify-around p-1">
        <Image src='/images/T-shirt.png' alt={''} width={250} height={250} className='rounded-md'/>
    </div>

   <div className='p-3'><DropdownExample/></div>

   <div className='p-2'>
    <h3>First Name</h3>
    <input style={{ display: 'inline-block' }} />

    <h3>Last Name</h3>
    <input style={{ display: 'inline-block' }} />

    <h3>Remarks</h3>
    <textarea style={{ display: 'inline-block' }} />
</div>
</div>

    </div>
    </>
  )
}

// // "use client"
// /* eslint-disable @next/next/no-img-element */
// import ProductItem from '@/components/products/ProductItem'
// // import data from '@/lib/data'
// import productService from '@/lib/services/productService'
// import { convertDocToObj } from '@/lib/utils'
// import { Metadata } from 'next'
// import Link from 'next/link'
// import Image from 'next/image'
// import Swal from 'sweetalert2';
// // import { useEffect } from 'react'


// import brownies from 'brownies.jpeg'
// import axios from 'axios';
// import search from './search'
// import Search from './search'

// // export const metadata: Metadata = {
// //   title: process.env.NEXT_PUBLIC_APP_NAME || 'GenShop',
// //   description:
// //     process.env.NEXT_PUBLIC_APP_DESC ||
// //     'Nextjs, Server components, Next auth, daisyui, zustand',
// // }

// export default async function Front() {
//   const featuredProducts = await productService.getFeatured()
//   const latestProducts = await productService.getLatest(7)
//   const sampleProducts = [{name:'productt1', color:'red', price:20, image:'../../public/images/brownies.jpeg'},{name:'productt2', color:'gray',price:206, image:''}]

//   // if (typeof window == "undefined") { window.location.reload()}

//   // const getStores = async() => {
//   //   try{
//   //     const resStores = await axios.get(`api/store/${localStorage.getItem('id')}`)
//   //     console.log(`resSores: `, resStores)
//   //   } catch (eror) {
//   //     console.error
//   //   }
//   // }

//   // useEffect(()=> {
//   //   getStores()
//   // })


//   return (
//     <>
//     <div className='bg-black-200'>

//       <div className="w-full carousel rounded-box mt-4 bg-pink-400 z-0">
//         {featuredProducts.map((product, index) => (
//           <div
//             key={product._id}
//             id={`slide-${index}`}
//             className="carousel-item relative w-full"
//           >
//             <Link href={`/product/${product.slug}`}>
//               <img src={product.banner} className="w-full" alt={product.name} />
//             </Link>

//             <div
//               className="absolute flex justify-between transform
//                -translate-y-1/2 left-5 right-5 top-1/2"
//             >
//               <a
//                 href={`#slide-${
//                   index === 0 ? featuredProducts.length - 1 : index - 1
//                 }`}
//                 className="btn btn-circle"
//               >
//                 ❮
//               </a>
//               <a
//                 href={`#slide-${
//                   index === featuredProducts.length - 1 ? 0 : index + 1
//                 }`}
//                 className="btn btn-circle"
//               >
//                 ❯
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//                 <Search/> {/* This component utilizes `use client` which is contained only for its use */}


//       <div className='flex flex-row gap-2 justify-start pb-1 '>
//         {/* Justify-end is like having an anchor on the right side and justify-start on the left*/}
//       <h4 className="text-sm sm:text-md md:text-lg py-2 bg-blue-400 p-4 rounded-md w-full">Featured    Products</h4>
//       {/* <h4 className="text-sm sm:text-md md:text-lg py-2 bg-blue-400 p-4 rounded-md">Products</h4>
//       <h4 className="text-sm sm:text-md md:text-lg py-2 bg-blue-400 p-4 rounded-md">About</h4> */}

//       </div>
//       {/* <img src={brownies} className='h-[10em]' alt='Brownies'></img> */}

//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
//       {/* {sampleProducts.map((product, index) => (
//           <ProductItem key={index} product={product} />
//         ))} */}
//         {latestProducts.map((product) => (
//           <ProductItem key={product.slug} product={product} />
//         ))}
//         {/* <div className='card bg-base-300 shadow-xl p-1'>
//                   <figure className='text-sm w-full'>
//             <a href={`/add`} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={`/images/add.png`}
//                 alt={`sdasd`}
//                 // objectFit='cover'
//                 //So far, I think the grid CSS is better for cards and width and height inside it is best
//                 // The width and height seems to set the maximum allowable dimensions
//                 width={2000}
//                 height={2000}
//                 className='w-full'
//               />
//             </a>
//           </figure>
//         </div> */}
//       </div>
//     </div>
//     </>
//   )
// }