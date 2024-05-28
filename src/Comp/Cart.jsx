import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'

function Cart() {

  const { state, getCartItems, returnItem, delItem } = useContext(AppContext);
  // const [changeQty , setChangeQty] = useState()

  useEffect(() => {
    getCartItems()
  }, []);

  const handleDel = (id) => {
    delItem(id)
    returnItem(state, id)
    // console.log(state);
  }


  // console.log(selectedQty,'here');
  return (
    <>
      <div className=' flex px-32 py-9 gap-6'>
        <div className=' p-2'>
          <h1 className='text-3xl font-semibold tracking-widest mb-8'>SHOPPING CART</h1>

          {
            state.carts && state.carts.length > 0 ? (
              state.carts.map((cart, i) => (
                <div className='px-6 pe-28 flex py-4 border-b' key={i}>
                  <img src={cart.image} alt="mouse" height={100} width={100} className='rounded-md' />
                  <h3 className='ms-8 w-40 tracking-widest'>{cart.name}</h3>
                  <p className='ms-12 text-base'>${cart.price}</p>
                  <select
                    value={cart.selectedQty}
                    onChange={(e) => cart.selectedQty}
                    className="cursor-pointer bg-gray-100 focus:outline-none focus:shadow-lg text-base h-12 ms-20 pl-6 pr-10"
                  >
                    {cart.countInStock > 0 ? (
                      [...Array(cart.countInStock).keys()].map((ele) => (
                        <option key={ele + 1} value={ele + 1}>
                          {ele + 1}
                        </option>
                      ))
                    ) : (
                      <option value='0'>0</option>
                    )}
                  </select>

                  <i class="fa-solid fa-trash h-14 w-16 p-6 transition-all hover:bg-gray-50 ms-20 cursor-pointer"
                    onClick={() => handleDel(cart.id)}>
                  </i>
                </div>
              ))
            ) : (
              <p className='px-12 text-lg'>Your shopping cart is empty.</p>
            )
          }
        </div>
        <div>
          <div className='p-2 border'>
            {
              state.carts && state.carts.length > 0 ? (
                <>
                  <div className='p-2'>
                    <h1 className='text-3xl text-gray-700 tracking-widest font-semibold py-2'>SUBTOTAL ({state.carts.length}) ITEMS</h1>
                    <h4 className='text-base p-2 pb-0 tracking-widest'>${state.carts[0].price}</h4>
                  </div>
                  <div className='p-4 border border-t-0'>
                    <button
                      className="uppercase text-white bg-black font-semibold w-full text-sm py-4">
                      proceed to checkout
                    </button>
                  </div>
                </>

              ) : (
                <p className='px-40 text-lg'>Your shopping cart is empty.</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;







// import React, { useContext, useEffect } from 'react';
// import { AppContext } from '../AppContext';

// function Cart() {
//   const { state, getCartItems } = useContext(AppContext);

//   useEffect(() => {
//     getCartItems();
//   }, []);

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-12 p-4">
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-3xl font-semibold tracking-widest mb-8">SHOPPING CART</h1>

//           {state.carts && state.carts.length > 0 ? (
//             state.carts.map((cart, i) => (
//               <div className="flex items-center border-b py-4 space-x-4" key={i}>
//                 <img src={cart.image} alt="mouse" className="w-24 h-24 lg:w-36 lg:h-36 rounded-md" />
//                 <div className="flex flex-col w-full lg:flex-row lg:items-center lg:space-x-4">
//                   <h3 className="text-lg lg:text-xl font-semibold tracking-widest w-full">{cart.name}</h3>
//                   <p className="text-base font-semibold w-full lg:w-36 text-right">${cart.price}</p>
//                   <select
//                     value={cart.selectedQty}
//                     className="w-20 h-12 focus:outline-none focus:shadow-lg bg-gray-100 text-base pl-3 pr-10"
//                   >
//                     {[...Array(cart.countInStock).keys()].map((ele) => (
//                       <option key={ele + 1} value={ele + 1}>
//                         {ele + 1}
//                       </option>
//                     ))}
//                   </select>
//                   <i className="fa-solid fa-trash h-12 w-14 p-4 transition-all hover:bg-gray-50 cursor-pointer"></i>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Your shopping cart is empty.</p>
//           )}
//         </div>
//         <div className="w-full lg:w-1/2">
//           <div className="border p-4">
//             {state.carts && state.carts.length > 0 ? (
//               <div className="p-4">
//                 <h1 className="text-3xl text-gray-700 tracking-widest font-semibold">SUBTOTAL ({state.carts.length} ITEMS)</h1>
//                 <h4 className="text-base tracking-widest font-semibold pt-2">${state.carts[0].price}</h4>
//               </div>
//             ) : (
//               <p>Your shopping cart is empty.</p>
//             )}
//           </div>
//           <div className="p-4 border-t-2">
//             <button className="uppercase text-white bg-black font-semibold w-full text-sm py-4">Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;
