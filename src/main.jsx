import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AddItem from './components/AddItem/AddItem';
import UpdateItem from './components/UpdateItem/UpdateItem';
import AllItems from './components/AllItems/AllItems';
import MyList from './components/MyItemList/MyList';
import { register } from 'swiper/element/bundle';
import Details from './components/Details/Details';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './route/PrivateRoute';




register();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/allItems',
      element: <AllItems></AllItems>,
      loader: () => fetch('http://localhost:5000/items')
    },
    {
      path: '/myList',
      element: <PrivateRoute><MyList></MyList></PrivateRoute> 
    },
    {
      path: '/addItem',
      element: <PrivateRoute><AddItem></AddItem></PrivateRoute> 
    },
    {
      path: '/details/:id',
      element: <PrivateRoute><Details></Details></PrivateRoute> ,
      loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
    },
    {
      path: '/updateItem/:id',
      element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute> ,
      loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
    }, {
      path: '/register',
      element: <Register></Register>
    }, {
      path: '/login',
      element: <LogIn></LogIn>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
