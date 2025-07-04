import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from "./components/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <WishlistProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WishlistProvider>
  </React.StrictMode>
  
)
