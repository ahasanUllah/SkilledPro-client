import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";

const Header = () => {

    return (
        <header className="p-4 bg-gray-100 text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
			<FaGraduationCap className='text-4xl text-blue-600'/> <span className='text-2xl font-bold'>SkilledPro</span>
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1  border-transparent text-blue-600 border-blue-600">Courses</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Faq</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
			</li>
			<li className="flex">
			<label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-gray-800">
	<span>Light</span>
	<span className="relative">
		<input id="Toggle2" type="checkbox" className="hidden peer" />
		<div className="w-10 h-4 rounded-full shadow bg-gray-400 peer-checked:bg-blue-600"></div>
		<div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-blue-600"></div>
	</span>
	<span>Dark</span>
</label>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-gray-50">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;