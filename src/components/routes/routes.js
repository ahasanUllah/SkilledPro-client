import { createBrowserRouter } from 'react-router-dom';
import Checkout from '../Checkout';
import Course from '../Course';
import CourseDetails from '../CourseDetails';

import Home from '../Home';
import Main from '../layout/Main';
import Login from '../Login';
import Register from '../Register';
import PrivateRoute from './PrivateRoute';
export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/course',
            element: <Course></Course>,
            loader: () => fetch('http://localhost:5000/course/'),
         },
         {
            path: '/course/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
         },
         {
            path: '/checkout/:id',
            element: (
               <PrivateRoute>
                  <Checkout></Checkout>
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/register',
            element: <Register></Register>,
         },
      ],
   },
]);
