import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'


const Cart = () => {

   const dispatch = useDispatch()

   const userCart = useSelector(state=>state.cartReducer)

   const navigate = useNavigate()

   const [cartTotal,setCartTotal] = useState(0)

   useEffect(()=>{
      if(userCart?.length>0){
         setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
         
      }
   },[userCart])

  


   const handleDecrementQuantity = (product) =>{
      if(product?.quantity>1){
         dispatch(decrementQuantity(product.id))
      }else{
         dispatch(removeCartItem(product.id))
      }
   }

   const checkout = () =>{
      dispatch(emptyCart())
      alert("Order successfull")
      navigate('/')//redirect to home

   }

  return (
    <>
                   <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
           {

            userCart?.length>0?

             <>
              
             <h1 className='text-5xl font-bold text-blue-600 '>Cart Summary</h1>
             <div className='grid grid-cols-3 gap-4 mt-5'>
              <div className='col-span-2 border rounded p-5 shadow'>
                   <table className='table-auto w-full'>
                    <thead>
                      <tr>
                          <td className='font-semibold'>#</td>
                          <td className='font-semibold'>Name</td>
                          <td className='font-semibold'>Image</td>
                          <td className='font-semibold'>Quantity</td>
                          <td className='font-semibold'>Price</td>
                          <td className='font-semibold'>...</td>
                      </tr>

                    </thead>
                    <tbody>
                      {
                           userCart?.map((product,index)=>(
                              <tr>
                              <td>{index+1}</td>
                              <td>{product?.title}</td>
                              <td><img height={'70px'} width={'70px'} src={product?.thumbnail} alt="" /></td>
                              <td>
                                <div className='flex'>
                                  <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                                  <input className='border p-1 rounded mx-2' style={{width:'40px'}} type="text" value={product?.quantity} readOnly />
                                  <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                                </div>
                              </td>
                              <td>$ {product?.totalPrice}</td>
                              <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
                           </tr>
                           ))



                      }
                    </tbody>
                  
                   </table>
                   <div className='float-right mt-5'>
                      <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                      <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More...</Link>
                   </div>

              </div>
              <div className='col-span-1'>
                 <div className='border rounded p-5'>
                    <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
                    <hr />
                    <button onClick={checkout} className='bg-green-600 rounded p-2 text-white w-full mt-4 '>Check Out</button>
                 </div>
              </div>
             </div>

             </>
          :
          <div className='flex justify-center items-center'>
           <img src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
            <h1 className='text-red-600 text-3xl'>Your cart is empty..</h1>
          </div>
           }

    </div>
    </>
   
    



    
  )
}

export default Cart