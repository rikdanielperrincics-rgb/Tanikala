import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'
import AppRoute from './routes/AppRoute.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ minHeight: '100vh', background: '#f0f0f0' }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />  
      <GoogleOAuthProvider clientId="377372060361-670e2ac7rig7j3gkvjfjp3u3ba1ot2r2.apps.googleusercontent.com">
        <AppRoute />
      </GoogleOAuthProvider>
    </div>
  </StrictMode>,
)
