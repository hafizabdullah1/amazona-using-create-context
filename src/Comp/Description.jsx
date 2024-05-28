import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import Review from './Review';
// import Magnifier from "react-magnifier";

function Description() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchSingleProduct, state, addProduct, handleStock } = useContext(AppContext);
  const [selectedQty, setSelectedQty] = useState(1)

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  const product = state.products ? state.products : null;

  const obj = { product, selectedQty }
  // console.log(obj,'obj');

  const addToCart = () => {
    addProduct(obj)
    handleStock(obj, id)
    navigate('/cart');
  }

  return (
    <>
      {product ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-8 py-12 mx-auto">
            <button
              className="select-none capitalize py-3 px-7 mb-4 transition-all hover:transition-all hover:bg-gray-100 font-semibold"
              onClick={() => navigate('/')}
            >
              Go Back
            </button>
            <div className="lg:w-full mx-auto flex flex-wrap">
              {/* <Magnifier src={product.image} />; */}
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-3 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {product.brand}
                  </h2>
                  <h1 className="text-gray-700 text-3xl title-font font-medium mb-8 uppercase tracking-wider">
                    {product.name}
                  </h1>
                  <div className="flex mb-4 border-t border-b py-3 -ms-5 mt-4">
                    <span className="flex items-center pl-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class={`w-4 h-4 ml-1 ${index < product.rating ? 'fill-current text-yellow-300' : 'fill-current text-gray-300'}`}
                          viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      ))
                      }
                    </span>
                    <span className="text-gray-600 ml-3">{product.numReviews} Reviews</span>
                  </div>
                  <div className="border-b px-4 -ms-5 pb-1 mb-3 text-lg">
                    <p className="text-gray-500 mb-1">Price: ${product.price}</p>
                  </div>
                  <p className="leading-relaxed text-black text-sm tracking-wider">
                    Description: {product.description}
                  </p>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-6 lg:py-6 mt-6 lg:mt-0">
                  <div className="border">
                    <div className="flex justify-start gap-20 border-b items center py-3 ps-5">
                      <p>Price:</p>
                      <p>${product.price}</p>
                    </div>
                    <div className="flex justify-start gap-[71px] border-b items center py-3 ps-5">
                      <p>Status:</p>
                      <p className="capitalize">{product.countInStock > 0 ? 'In Stock' : 'out of stock'}</p>
                    </div>
                    <div className="flex justify-start gap-24 border-b items center py-3 ps-5">
                      <p className="capitalize">Qty</p>
                      <select
                        // value={product.countInStock === 0 ? 0 : selectedQty}
                        value={selectedQty}
                        onChange={(e) => setSelectedQty(e.target.value)}
                        className=" cursor-pointer bg-gray-100 py-2 w-24 focus:outline-none focus:shadow-lg text-base pl-3 pr-10">
                        {product.countInStock > 0 ? (
                          [...Array(product.countInStock).keys()].map((ele) => (
                            <option key={ele + 1} value={ele + 1}>
                              {ele + 1}
                            </option>
                          ))
                        ) : (
                          <option value={0}>0</option>
                        )}
                      </select>
                    </div>
                    <div className="flex justify-center items center py-3">
                      <button className="uppercase text-white bg-black font-bold px-16 text-xs py-4"
                        disabled={product.countInStock > 0 ? false : true}
                        onClick={addToCart}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className='bg-white h-screen w-full p-6 flex justify-center items-start pt-20'>
          <div className='h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 rounded-full animate-spin border-r-2 md:border-r-3 lg:border-r-4 border-r-white border-b-2 md:border-b-3 lg:border-b-4 border-t-2 md:border-t-3 lg:border-t-4 border-l-2 md:border-l-3 lg:border-l-4 border-gray-700'>
          </div>
        </div>
      )}
      <Review id={state.products.id} />
    </>
  );
}

export default Description;


// import React, { useContext, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../AppContext';

// function Description() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { fetchSingleProduct, state } = useContext(AppContext);

//   useEffect(() => {
//     fetchSingleProduct(id);
//   }, [id]);

//   const product = state.products ? state.products : null;

//   return (
//     <>
//       {product ? (
//         <section className="text-gray-600 body-font overflow-hidden">
//           <div className="container mx-auto px-4 py-6">
//             <button
//               className="capitalize py-2 px-4 mb-4 transition-all hover:transition-all hover:bg-gray-100 font-semibold"
//               onClick={() => navigate('/')}
//             >
//               Go Back
//             </button>
//             <div className="lg:flex flex-wrap -mx-4">
//               <div className="lg:w-1/2 w-full mb-6 md:w-full md:mb-0 px-4">
//                 <img
//                   alt="ecommerce"
//                   className="w-full h-64 object-cover object-center rounded"
//                   src={product.image}
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full md:pl-6 mt-6 md:mt-0 px-4">
//                 <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                   {product.brand}
//                 </h2>
//                 <h1 className="text-2xl title-font font-medium mb-1 text-black">
//                   {product.name}
//                 </h1>
//                 <div className="flex mb-4 items-center">
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, index) => (
//                       <svg
//                         key={index}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-6 w-6 ${
//                           index < product.rating
//                             ? 'fill-current text-yellow-300'
//                             : 'fill-current text-gray-300'
//                         }`}
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//                         />
//                       </svg>
//                     ))}
//                     <span className="ml-2">{product.numReviews} Reviews</span>
//                   </div>
//                 </div>
//                 <div className="border-b mb-3 pb-2">
//                   <p className="text-gray-500">Price: ${product.price}</p>
//                 </div>
//                 <p className="text-base text-black tracking-wider">
//                   Description: {product.description}
//                 </p>
//                 <div className="border-t border-b py-4 flex flex-wrap justify-between items-center mt-6">
//                   <p className="text-black text-lg font-semibold">Price: ${product.price}</p>
//                   <div className="md:flex gap-4">
//                     <p className="text-black text-lg font-semibold">
//                       Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
//                     </p>
//                     <div className="relative">
//                       <p className="text-black text-lg font-semibold">Qty</p>
//                       <select className="bg-gray-100 py-2 w-24 focus:outline-none focus:shadow-lg text-base pl-3 pr-10">
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="py-4">
//                   <button className="uppercase text-white bg-black font-semibold px-16 py-4 text-xs">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default Description;
