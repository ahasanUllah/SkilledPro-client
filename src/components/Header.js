import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { AuthContext } from './context/AuthProvider';
import { toast } from 'react-toastify';
import { ThemeContext } from './context/ThemeProvider';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { user, logoutUser } = useContext(AuthContext);
   const { theme, setTheme } = useContext(ThemeContext);

   const handleLogOut = () => {
      logoutUser()
         .then(() => {
            toast.success('logout successfull');
         })
         .catch((error) => {
            toast.success(error.message);
         });
   };

   const handleToggle = (e) => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   };

   return (
      <>
         <div className="bg-gray-50 dark:bg-gray-800">
            <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-50">
               <div className="relative flex items-center justify-between">
                  <div className="flex items-center">
                     <Link to="/" aria-label="Company" title="Company" className="inline-flex items-center mr-8">
                        <FaGraduationCap className="text-4xl text-blue-600" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 uppercase">
                           SkilledPro
                        </span>
                     </Link>
                     <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                           <Link
                              to="/course"
                              title="Courses"
                              className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                              Course
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/faq"
                              title="FAQ"
                              className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                              FAQ
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/blog"
                              aria-label=" Blog"
                              title=" Blog"
                              className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                           >
                              Blog
                           </Link>
                        </li>
                        <li>
                           {/* Theme Toggler */}
                           <label
                              htmlFor="Toggle1"
                              className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                           >
                              <span className="dark:text-white">Light</span>
                              <span className="relative">
                                 <input id="Toggle1" type="checkbox" className="hidden peer" onClick={handleToggle} />
                                 <div className="w-10 h-6 rounded-full shadow-inner bg-blue-600 peer-checked:bg-gray-600"></div>
                                 <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                              </span>
                              <span className="dark:text-white">Dark</span>
                           </label>
                        </li>
                     </ul>
                  </div>
                  <ul className="flex items-center hidden space-x-8 lg:flex">
                     <li>
                        {user?.uid ? (
                           <div className="flex">
                              <img
                                 className="w-10 rounded-full mr-3"
                                 title={user?.displayName || user?.reloadUserInfo?.screenName}
                                 src={user.photoURL}
                                 alt=""
                              />
                              <button
                                 className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                 onClick={handleLogOut}
                              >
                                 Logout
                              </button>
                           </div>
                        ) : (
                           <>
                              <Link
                                 to="/login"
                                 title="Sign in"
                                 className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4"
                              >
                                 Sign in
                              </Link>
                              <Link
                                 to="/register"
                                 className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                 aria-label="Sign up"
                                 title="Sign up"
                              >
                                 Sign up
                              </Link>
                           </>
                        )}
                     </li>
                     <li></li>
                     <li></li>
                  </ul>
                  <div className="lg:hidden">
                     <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                     >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                           <path
                              fill="currentColor"
                              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                           />
                           <path
                              fill="currentColor"
                              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                           />
                           <path
                              fill="currentColor"
                              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                           />
                        </svg>
                     </button>
                     {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-50">
                           <div className="p-5 bg-white dark:bg-gray-900 border rounded shadow-sm">
                              <div className="flex items-center justify-between mb-4">
                                 <div>
                                    <Link
                                       to="/"
                                       aria-label="Company"
                                       title="Company"
                                       className="inline-flex items-center"
                                    >
                                       <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 uppercase">
                                          SkillPro
                                       </span>
                                    </Link>
                                 </div>
                                 <div>
                                    <button
                                       aria-label="Close Menu"
                                       title="Close Menu"
                                       className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                       onClick={() => setIsMenuOpen(false)}
                                    >
                                       <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                             fill="currentColor"
                                             d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                       </svg>
                                    </button>
                                 </div>
                              </div>
                              <nav>
                                 <ul className="space-y-4">
                                    <li>
                                       <Link
                                          to="/course"
                                          title="Courses"
                                          className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                       >
                                          Course
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to="/faq"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                       >
                                          FAQ
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          to="/"
                                          aria-label="Product Blog"
                                          title="Blog"
                                          className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                       >
                                          Blog
                                       </Link>
                                    </li>
                                    <li>
                                       <label
                                          htmlFor="Toggle1"
                                          className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
                                       >
                                          <span className="dark:text-gray-200">Light</span>
                                          <span className="relative">
                                             <input id="Toggle1" type="checkbox" className="hidden peer" />
                                             <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-blue-600"></div>
                                             <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                          </span>
                                          <span className="dark:text-gray-200">Dark</span>
                                       </label>
                                    </li>

                                    <li>
                                       {user?.uid ? (
                                          <div className="flex">
                                             <img
                                                className="w-10 rounded-full mr-3"
                                                title={user?.displayName || user?.reloadUserInfo?.screenName}
                                                src={user.photoURL}
                                                alt=""
                                             />
                                             <button
                                                className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                onClick={handleLogOut}
                                             >
                                                Logout
                                             </button>
                                          </div>
                                       ) : (
                                          <>
                                             <Link
                                                to="/login"
                                                title="Sign in"
                                                className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4"
                                             >
                                                Sign in
                                             </Link>
                                             <Link
                                                to="/register"
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                             >
                                                Sign up
                                             </Link>
                                          </>
                                       )}
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
