import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link,  } from 'react-router-dom';

const CourseCard = ({course}) => {
  const {title, id, image, rating, lavel, instructor, price} = course
    return (
     <Link to={`/course/${id}`}>
      <div  className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 flex flex-col justify-start items-start">
            <p className="mb-3 text-left  bg-green-200 inline p-2 text-xs font-semibold tracking-wide uppercase">
              {lavel}
            </p>
            <p                         
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-left"
            >
              {title}
            </p>
            <p className="mb-2 text-gray-700 text-left">
             {instructor}
            </p>

            <p                         
              className="inline-flex items-center font-bold transition-colors duration-200 text-xl text-gray-700"
            >
              ${price}.<small className='mt-1'>99</small>
            </p>
            <p
              
             
              className="inline-flex items-center font-semibold transition-colors duration-200 text-lg"
            >
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <span className='text-md text-gray-400 ml-1'>  ({rating})</span>
             
            </p>
          </div>
        </div>
     </Link> 
  
    );
};

export default CourseCard;