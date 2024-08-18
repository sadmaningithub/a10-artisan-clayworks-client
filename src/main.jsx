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
      element: <AllItems></AllItems>
    },
    {
      path: '/myList',
      element: <MyList></MyList>
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
