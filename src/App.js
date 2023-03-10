import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './page/cart/Cart';
import Checkout from './page/checkout/Checkout';
import Detail from './page/detail/Detail'; import Home from './page/home/Home';
import Login from './page/login/Login'; import Shop from './page/shop/Shop';
import Register from './page/register/Register.jsx'
function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path='/Detail/:id' element={<Detail />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/Checkout" element={<Checkout />} />
					{/* <Route path="/Search" element={<Search />} /> */}
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
				</Routes>
			</BrowserRouter> 
	);
}

export default App;
