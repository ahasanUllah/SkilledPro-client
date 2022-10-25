import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import SideBar from './SideBar';

const Course = () => {
    const courses = useLoaderData()
   
    console.log(courses);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 container mx-auto'>
            <div className=' col-span-1'>
            <SideBar courses={courses}></SideBar>
            </div>


            {/* Main Section */}
           <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 md:col-span-2 lg:col-span-4'>
           <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
           
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
            
            </div>
           </div>
        </div>
    );
};

export default Course;