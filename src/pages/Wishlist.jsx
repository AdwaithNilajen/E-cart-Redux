import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state. wishlistReducer)



  const handleCart =(product)=>{
      dispatch(removeItem(product?.id))
      dispatch(addToCart(product))
      const existingProduct = userCart?.find(item=>item?.id==product.id)
      if(existingProduct){
        alert('Product quantity is incrementing !')
      }else{
        alert('product is being added to cart')
        
      }
  
     }





  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
       {
        userWishlist?.length>0?
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
         {
          userWishlist?.map(product=>(
            <div className='rounded border p-2 shadow'>
             <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
             <div className='text-center'>
                  <h3 className='text-xl font-bold '>{product?.title}</h3>
                  <div className='flex justify-evenly mt-3'>
                     <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-minus text-red-600"></i></button>
                     <button  onClick={()=>handleCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>

                  </div>
             </div>
         </div>
          ))
         }
       </div>
        </>
        :
        <div className='flex justify-center items-center'>
          <img src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
          <h1 className='text-red-600 text-3xl'>Your wishlist is empty..</h1>
        </div>
       }
      </div>
    </>
  )
}

export default Wishlist