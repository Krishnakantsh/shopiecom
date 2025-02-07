import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './StateRedux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/*  when we want to use router then we need to put into BrowserRouter  */}
    

     {/* Provider is used for when we want to access store into whole components  */}

       <Provider  store={store}   >                    
         <App />
       </Provider>
  </StrictMode>,
)
