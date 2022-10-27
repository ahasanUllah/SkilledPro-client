import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/routes/routes';

function App() {
   return (
      <div className="app dark:bg-gray-900">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
