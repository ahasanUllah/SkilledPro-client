import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import SideBar from './SideBar';

const Course = () => {
    return (
        <div className='grid grid-cols-5 container mx-auto'>
            <div className=' col-span-1'>
            <SideBar></SideBar>
            </div>


            {/* Main Section */}
            <div className=' col-span-4'>
            <CourseCard />
            </div>
        </div>
    );
};

export default Course;