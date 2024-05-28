import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

const initial = {
  full_name: '',
  comment: ''
};

function Review({ id }) {
  const { addComment } = useContext(AppContext);
  const [comment, setComment] = useState(initial);
  const [err, setErr] = useState({});
  const handleComment = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  // const addReview = async (id, updatedData) =>{
  //       try {
  //         const res = await axios.put(`http://localhost:3005/produucts/${id}`,updatedData)
  //       } catch (error) {
  //         console.error(error);
  //       }
  // };

  // const handleReviewData=async()=>{
  //   const updatedReview = {
  //     ...(products?.review || []), {}
  //   }
  // }

  const checkCommentValidation = () => {
    let newErr = {};

    if (!comment.full_name) {
      newErr.full_name = "Please enter your full name to submit your review.";
    }
    if (!comment.comment) {
      newErr.comment = "Please write your review to submit.";
    }

    setErr(newErr);
    return Object.keys(newErr).length === 0;
  };

  const sendComment = () => {
    const isValid = checkCommentValidation();
    if (isValid) {
      // addComment(updatedData, id);
      setComment(initial);
    }
  };

  return (
    <>
      <div className='px-36'>
        <h1 className='tracking-widest text-4xl'>Reviews</h1>
        <div className='border-b mt-6 py-3 px-6 mb-4 w-1/2'>
            <h3 className='tracking-wider text-base capitalize text-gray-700 py-1'>Admin User</h3>
            <h4 className='tracking-wider text-base capitalize text-gray-700'>2022-01-04</h4>
            <h3 className='tracking-wider text-base capitalize text-gray-700 py-1 my-5 '>Good</h3>
        </div>

        <div>
          <h1 className='tracking-widest text-3xl'>WRITE A CUSTOMER REVIEW</h1>
          <div className='w-1/2 py-5'>
            <label htmlFor="full_name" className='capitalize text-base tracking-wider py-3 block'>
              Write your full name
            </label>
            <input
              className='border-0 w-full text-base px-5 capitalize bg-gray-100 py-4 focus:outline-0 mb-4'
              type='text'
              value={comment.full_name}
              name='full_name'
              onChange={handleComment}
              placeholder='Name...'
            />
            {err.full_name && <span className='text-red-500 text-sm'>{err.full_name}</span>}
            <label htmlFor="comment" className='capitalize text-base tracking-wider py-3 block'>
              Write your review
            </label>
            <textarea
              className='border-0 w-full text-base px-5 capitalize bg-gray-100 py-6 focus:outline-0 mb-4'
              value={comment.comment}
              name='comment'
              onChange={handleComment}
            ></textarea>
            {err.comment && <span className='text-red-500 text-sm block'>{err.comment}</span>}
            <button
              className=' mt-4 border-0 bg-gray-900 text-white py-4 px-7 uppercase'
              type='submit'
              onClick={sendComment}
            >Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
