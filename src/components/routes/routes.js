
import { createBrowserRouter } from 'react-router-dom'
import Course from '../Course'
import Header from '../Header'
import Home from '../Home'
import Main from '../layout/Main'
export const router = createBrowserRouter([
{
    path:'/', element: <Main></Main>, children: [
        {
            path:'/', element: <Home></Home>
        },
        {
            path:'/course', element: <Course></Course>
        }
    ]
}
])