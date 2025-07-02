import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_CLIENT_ID}`}>
        <App />
    </GoogleOAuthProvider>
)
