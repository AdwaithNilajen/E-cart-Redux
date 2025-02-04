import React from 'react'
import Header from '../components/Header'
const View = () => {
  return (
    <>

    <Header/>
    <div className='flex flex-col mx-5'>
       <div className='grid grid-cols-2 items-center h-screen'>

        <img width={'450px'} height={'200px'} src="https://play-lh.googleusercontent.com/2QEKcIOLIO9HRoL6lWIVFEY_Y07oW1_5Zk0vvEHym1Wsxzhdjf0mJ6eMG8QBs66c0S8" alt="" />
        <div>
          <h3 className='font-bold'>PID: id</h3>
          <h1 className='text-5xl font-bold'>Product Name</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$250</h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <p>
            <span className='font-bold'>Description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim ex facere, distinctio accusantium voluptatibus velit perferendis qui exercitationem rem delectus dolor alias obcaecati, aperiam, possimus repudiandae ipsam ad. Illo.
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to cart</button>

            </div>
          </p>
        </div>

       </div>
    </div>
    
    </>
  )
}

export default View