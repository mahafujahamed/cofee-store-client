import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCofee from './components/AddCofee.jsx';
import UpdateCofee from './components/UpdateCofee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addCofee",
    element: <AddCofee></AddCofee>
  },
  {
    path: 'updateCofee',
    element: <UpdateCofee></UpdateCofee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
