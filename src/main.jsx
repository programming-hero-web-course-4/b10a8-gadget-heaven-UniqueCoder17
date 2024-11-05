import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'profile',
        element: <Profile></Profile>,
        loader: () => fetch('/profilesData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgetsData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
