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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/addItem',
      element: <AddItem></AddItem>
    },
    {
      path: '/updateItem',
      element: <UpdateItem></UpdateItem>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
