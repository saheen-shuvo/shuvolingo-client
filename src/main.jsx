import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <ToastContainer></ToastContainer>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
