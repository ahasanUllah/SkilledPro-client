import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog';
import Checkout from '../Checkout';
import Course from '../Course';
import CourseDetails from '../CourseDetails';
import ErrorPage from '../ErrorPage';
import Faq from '../Faq';

import Home from '../Home';
import Main from '../layout/Main';
import Login from '../Login';
import Register from '../Register';
import PrivateRoute from './PrivateRoute';
export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/course',
            element: <Course></Course>,
            loader: () => fetch('https://skilled-pro-server.vercel.app/course/'),
         },
         {
            path: '/course/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`https://skilled-pro-server.vercel.app/course/${params.id}`),
         },
         {
            path: '/checkout/:id',
            element: (
               <PrivateRoute>
                  <Checkout></Checkout>
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`https://skilled-pro-server.vercel.app/course/${params.id}`),
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/register',
            element: <Register></Register>,
         },
         {
            path: '/blog',
            element: <Blog></Blog>,
         },
         {
            path: 'faq',
            element: <Faq></Faq>,
         },
      ],
   },
]);
