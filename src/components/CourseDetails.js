
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MyDocument from './MyDocument';


const CourseDetails = () => {
    const courses = useLoaderData([])

	const navigate = useNavigate()

	const handlePremiumAccess = () => {
		navigate(`/checkout/${courses.id}`)
	}
    return (
        <div>
            

                <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-3xl lg:text-left ">
			<h1 className="text-xl font-bold leading-none sm:text-3xl mb-6">{courses.title} 

			 <PDFDownloadLink document={<MyDocument courses={courses}/>} filename="FORM">
      {({loading}) => (loading ? <button><FaCloudDownloadAlt /></button> : <button type="button" className="px-3 py-1"> <FaCloudDownloadAlt className='text-blue-600'/>		
			 </button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
			</h1>
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<img src="https://randomuser.me/api/portraits/men/78.jpg" className='w-14 rounded-full' alt="" />
                <span className='font-semibold'>{courses.instructor} </span> <span>||</span> <span> Last updated December 2021</span>
			</div>
            <div className='mt-12 flex flex-row space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <p>{courses.rating}</p>
            </div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={courses.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        <div className='grid grid-cols-1 md:grid-cols-5 container mx-auto'>
            <div className='col-span-1 md:col-span-4 space-y-6 p-20'>
                <h1 className='text-2xl font-semibold text-center'>About Our Course</h1>
                <p className='max-w-4xl mx-auto text-sm text-gray-500'>{courses.description}</p>
            </div>
            <div className='col-span-1'>
            <aside className="w-full p-6 sm:w-92 bg-gray-50 text-gray-800">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-6xl font-bold tracking-widest uppercase text-gray-600">${courses.price}</h2>
			<div className="flex flex-col  space-y-1">
			
			</div>
		</div>
		<div className="space-y-2 flex justify-between items-center">
			<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600 mt-2">Level</h2>
			<h2 className="text-sm  tracking-widest uppercase text-gray-600 ">{courses.lavel}</h2>
			<div className="flex flex-col space-y-1">
				
			</div>
		</div>
		<div className="space-y-2 flex justify-between items-center">
			<h2 className="text-sm font-semibold tracking-widest uppercase text-gray-600 mt-2">Instructor</h2>
			<h2 className="text-sm    text-gray-600 ">{courses.instructor}</h2>
			<div className="flex flex-col space-y-1">
				
			</div>
		</div>
		<div className="space-y-2">
        <button onClick={handlePremiumAccess} type="button" className="px-8 py-3 font-semibold rounded bg-blue-600 text-gray-100">Get Premium Access</button>
			<div className="flex flex-col space-y-1">
				
			</div>
		</div>
		
	</nav>
	
</aside>
            </div>
        </div>
        </div>
         
    );
};

export default CourseDetails;