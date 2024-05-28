import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import Slider from './Slider';

function AllProducts() {
  const { fetchAllProducts, state } = useContext(AppContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Slider />
      <section className="text-gray-600 body-font">
        <div className="container py-10 px-4 md:px-24 lg:px-8 mx-auto">
          <h1 className='text-3xl tracking-wider mb-10 text-black text-center md:text-left'>LATEST PRODUCTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {state.products && state.products.length > 0 ? (
              state.products[0].map((product, index) => (
                <Link to={`/products/${product.id}`}>
                  <div key={index} className="p-4 border border-gray-200">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                    </a>
                    <div className="mt-4 px-3 pb-4">
                      <h3 className="text-sm tracking-widest title-font mb-1">{product.name}</h3>
                      <div className="flex items-center gap-x-1">
                        <div className='flex items-center mb-4'>
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns='http://www.w3.org/2000/svg'
                              className={`h-4 w-4 ${index < product.rating ? 'fill-current text-yellow-300' : 'fill-current text-gray-300'
                                }`}
                              viewBox='0 0 20 20'
                              isHalf='true'>
                              <path
                                fillRule='evenodd'
                                d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
                                clipRule='evenodd'
                              />
                            </svg>
                          ))}
                          <span className='ml-2'>{product.rating}</span>
                        </div>
                      </div>
                      <p>reviews   <span>{product.numReviews}</span></p>
                      <p className="mt-1 text-2xl text-black">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className='bg-white h-96 w-screen -ms-40 py-6 flex justify-center items-start'>
                  <div className='h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 rounded-full animate-spin border-r-2 md:border-r-3 lg:border-r-4 border-r-white border-b-2 md:border-b-3 lg:border-b-4 border-t-2 md:border-t-3 lg:border-t-4 border-l-2 md:border-l-3 lg:border-l-4 border-gray-700'>
                  </div>
              </div>

            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllProducts;
