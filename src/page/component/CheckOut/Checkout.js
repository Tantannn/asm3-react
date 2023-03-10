import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { cartActions } from '../../redux/cartRedux';
import { useNavigate } from "react-router-dom";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
// import Navbar from '../navbar/Navbar';
import './checkout.css';

function Checkout() {
    const {cartArr} = useSelector(state => state.cartSlice)
    console.log(cartArr);
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Dùng useEffect để gọi dữ liệu getTotals từ redux

    const onChangeName = e => {
        setFullName(e.target.value)
        // console.log(e.target.value);
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
        // console.log(e.target.value);
    }

    const onChangePhone = e => {
        setPhone(e.target.value)
        // console.log(e.target.value);
    }

    const onChangeAddress = e => {
        setAddress(e.target.value)
        // console.log(e.target.value);
    }

    //Hàm validate form
    const validateAll = () => {
        if(isEmpty(fullname)) {
            alert('Vui lòng nhập FullName!')
            return
        }

        if (isEmpty(email)) {
            alert('Vui lòng nhập Email!')
            return
        }

        if (isEmpty(phone)) {
            alert('Vui lòng nhập số điện thoại!')
            return
        }

        if(isEmpty(address)) {
            alert('Vui lòng nhập số address')
            return
        }
        return true
    }

    const handlerPlaceOrder = (e) => {
        e.preventDefault()

        const isValid = validateAll();
        if (isValid) {
            alert('Đặt hàng thành công');
            localStorage.removeItem('Cart')
            navigate('/');
        } else
            return            
    }

    var total = 0
    cartArr.forEach((item) => {
      var price 
      price = item.quantity * item.price
      total += price 
    });


    return (
        <>
            {/* <Navbar /> */}
            <div className="checkout">
                <div className="checkoutContainer">
                    <div className="checkoutContent">
                        <div className="checkoutBanner">
                            <h3>CHECKOUT</h3>
                            <div className="checkoutBannerTitle">
                                <h6>HOME / CART/ CHECKOUT</h6>
                            </div>
                        </div>
                        <div className="checkoutbilling">
                            <div className="checkoutBillingContainer">
                                <h5>BILLING DETAILS</h5>
                                <div className="checkoutInput">
                                    <h6>FULL NAME:</h6>
                                    <input type="text" placeholder="Enter Your Full Name Here!" value={fullname} onChange={onChangeName}></input>
                                    <h6>EMAIL:</h6>
                                    <input type="email" placeholder="Enter Your Email Here!" value={email} onChange={onChangeEmail}></input>
                                    <h6>PHONE NUMBER:</h6>
                                    <input type="number" placeholder="Enter Your Phone Number Here!" value={phone} onChange={onChangePhone}></input>
                                    <h6>ADDRESS:</h6>
                                    <input type="text" placeholder="Enter Your Address Here!" value={address} onChange={onChangeAddress}></input>
                                </div>
                                <button className="checkoutBtn" onClick={handlerPlaceOrder} >Place order</button>
                            </div>
                            <div className="checkoutOrder">
                                <h5>YOUR ORDER</h5>
                                {cartArr.map((cartItem, i) => (
                                     <div className="checkoutProduct" key={i}>
                                         <h6>{cartItem.name}</h6>
                                       <h6>{Intl.NumberFormat('vi').format(cartItem.price)} VND x {cartItem.quantity}</h6>
                                  </div>
                                ))}
                                <div className="checkoutTotal">
                                    <h6 className="somthing"> Total</h6>
                                    <h6 className="somthing">{Intl.NumberFormat('vi').format(total)} VND</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;