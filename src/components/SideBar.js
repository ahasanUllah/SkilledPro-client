import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ courses }) => {
   return (
      <div className="mt-20">
         <aside className="w-full p-6 sm:w-60 bg-gray-50 text-gray-800 mx-auto rounded dark:bg-gray-800 dark:text-gray-400">
            <nav className="space-y-8 text-sm">
               <div className="space-y-2">
                  <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600 font-bold mb-8 dark:text-gray-200">
                     Our Courses
                  </h2>
                  <div className="flex flex-col space-y-5">
                     {courses.map((course) => (
                        <Link to={`/course/${course.id}`} key={course.id}>
                           {course.title}
                        </Link>
                     ))}
                  </div>
               </div>
            </nav>
         </aside>
      </div>
   );
};

export default SideBar;
