// import React, { useContext, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import {Link} from 'react-router-dom'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import {AppContext} from '../AppContext'

// const Slider = () => {
//     const {state,fetchAllProducts} = useContext(AppContext)

//     useEffect(() => {
//         fetchAllProducts()
//     }, [])

//     const products = state.products && state.products.length > 0 ? state.products[0] : null;

//     return (
//         <>
//         {products ? (
//         <div className='w-11/12 mx-auto pt-5 text-white'>
//             <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 3500,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 className="mySwiper h-[60vh] bg-[#343a40] py-10"
//             >
//                 <SwiperSlide>
//                     <div className="flex justify-center items-center flex-col ">
//                         <h1 className='text-2xl font-normal tracking-widest pb-4 pt-8'>{products[4].name} (${products[4].price})</h1>
//                         <div className='mb-20 w-3/12'>
//                             <Link to={`/products/${products[4].id}`}>
//                                 <img src={products[4].image} alt="mouse"/>
//                             </Link>
//                         </div>
                        
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="flex justify-center items-center flex-col ">
//                         <h1 className='text-2xl font-normal tracking-widest pb-4 pt-8'>{products[1].name} (${products[1].price})</h1>
//                         <div className='mb-20 w-3/12 '>
//                         <Link to={`/products/${products[1].id}`}>
//                                 <img src={products[1].image} alt="iphone"/>
//                         </Link>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="flex justify-center items-center flex-col">
//                         <h1 className='text-2xl font-normal tracking-widest pb-4 pt-8'>{products[2].name} (${products[2].price})</h1>
//                         <div className='mb-20 w-3/12 '>
//                         <Link to={`/products/${products[2].id}`}>
//                                 <img src={products[2].image} alt="camera"/>
//                             </Link>
//                           </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//         ):(
//             <p>loading...</p>
//         )}
//     </>
//     )
// }
// export default Slider;




import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AppContext } from '../AppContext';

const Slider = () => {
  const { state, fetchAllProducts } = useContext(AppContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const products = state.products && state.products.length > 0 ? state.products[0] : null;

  return (
    <>
      {products ? (
        <div className="w-11/12 mx-auto pt-5 text-white">
          <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[60vh] bg-[#343a40] py-10"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-2xl font-normal tracking-widest pb-4 pt-8">
                    {product.name} (${product.price})
                  </h1>
                  <div className="mb-10 w-4/12 max-w-xs md:w-3/12">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className='bg-white h-full w-full p-6 flex justify-center items-center'>
  <div className='h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 rounded-full animate-spin border-r-2 md:border-r-3 lg:border-r-4 border-r-white border-b-2 md:border-b-3 lg:border-b-4 border-t-2 md:border-t-3 lg:border-t-4 border-l-2 md:border-l-3 lg:border-l-4 border-gray-700'>
  </div>
</div>

      )}
    </>
  );
};

export default Slider;
