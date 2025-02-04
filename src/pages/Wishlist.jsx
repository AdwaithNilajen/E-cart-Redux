import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
           <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
           <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
                <img width={'100%'} height={'200px'} src="https://play-lh.googleusercontent.com/2QEKcIOLIO9HRoL6lWIVFEY_Y07oW1_5Zk0vvEHym1Wsxzhdjf0mJ6eMG8QBs66c0S8" alt="" />
                <div className='text-center'>
                     <h3 className='text-xl font-bold '>Product name</h3>
                     <div className='flex justify-evenly mt-3'>
                        <button className='text-xl'><i class="fa-solid fa-heart-circle-minus text-red-600"></i></button>
                        <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
  
                     </div>
                </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Wishlist