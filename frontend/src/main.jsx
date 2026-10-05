import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />
  </>
)
