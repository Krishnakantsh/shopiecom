import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/Homepage/HomePage'
import Navigation from '../customer/component/navigation/Navigation'
import Footer from '../customer/component/footer/Footer'
import Cart from '../customer/component/CartFolder/Cart'
import Product from '../customer/component/Product/Product'
import ProductDetails from '../customer/component/ProductDetails/ProductDetails'
import Checkout from '../customer/component/Checkout/Checkout'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'
import PaymentSuccessPage from '../customer/component/Payment/PaymentSuccessPage'

function CustomerRouters() {
  return (
    <>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route  path='/login'  element={<HomePage/>} ></Route>
            <Route  path='/register'  element={<HomePage/>} ></Route>
            <Route  path='/'  element={<HomePage/>} ></Route>
            <Route  path='/cart'  element={<Cart/>} ></Route>
            <Route  path='/:lavelOne/:lavelTwo/:lavelThree'  element={<Product/>} ></Route>
            <Route  path='/product/:productid'  element={<ProductDetails/> } ></Route>
            <Route  path='/checkout'  element={ <Checkout/> } ></Route>
            <Route  path='/account/order'  element={ <Order/> } ></Route>
            <Route  path='/account/order/:orderid'  element={ <OrderDetails/> } ></Route>    
            <Route  path='/payment/:orderid'  element={ <PaymentSuccessPage/> } ></Route>    
        </Routes>

         <div>
          <Footer/>
        </div>
    </>
  )
}

export default CustomerRouters