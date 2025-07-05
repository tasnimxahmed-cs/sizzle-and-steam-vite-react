import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { CartProvider } from "./context/CartContext";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'var(--color-brand)',
            color: 'var(--color-dark)',
          },
          success: {
            iconTheme: {
              primary: 'var(--color-dark)',
              secondary: 'var(--color-brand)',
            },
          },
        }}
      />
    </CartProvider>
  </React.StrictMode>,
)
