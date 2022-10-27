import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './context/ThemeProvider';
import Testimonials from './routes/Testimonials';

const Home = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   const handleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   };
   return (
      <div className="dark:bg-gray-900">
         <div className="relative ">
            <img
               src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
               className="absolute inset-0 object-cover w-full h-full"
               alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-50">
               <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="flex flex-col items-center justify-between xl:flex-row">
                     <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                           Access To <br className="hidden md:block " />
                           <span className="text-blue-500">5500+ </span>
                           <span className="">Courses from </span> <br /> <span className="text-blue-500">480+</span>{' '}
                           <span> Instructors & Institutions</span>
                        </h2>
                        <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan,
                           totam rem aperiam, eaque ipsa quae.
                        </p>
                        <Link
                           to="/course"
                           aria-label=""
                           className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-blue-500 hover:text-teal-accent-700"
                        >
                           Learn more
                           <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                           </svg>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Testimonials></Testimonials>
      </div>
   );
};

export default Home;
