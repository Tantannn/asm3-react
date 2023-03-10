import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, increase,decrease,calculateTotals, removeItem, } from '../../../redux/cartSlice'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CartItems = (props) => {
    const dispatch = useDispatch()
    const { cartItems, isLoading ,cartArr} = useSelector(state => state.cartSlice)
    useEffect(() => {
        dispatch(getCartItems())
    }, [])
    var detail = cartItems?.filter((item) => item._id.$oid == props.id)
    var cartAmount = cartArr.filter((item) => item.id == props.id)
console.log(cartAmount);
    
    return (
        <div>
            {isLoading && <h1>LOADING...</h1>}
            {detail[0] && <div className="basket-product">
                <div className="item">
                    <div className="product-image">
                        <img src={detail[0].img1} alt="Placholder Image 2" className="product-frame" />
                    </div>
                    <div className="product-details">
                        <h1><strong>{detail[0].name}</strong></h1>
                    </div>
                </div>
                <div className="price">{Intl.NumberFormat('vi').format(detail[0].price)} VND</div>
                <div className="quantity">
                    <p className="" ><GoArrowLeft onClick={() => dispatch(decrease(props.id))} /> {cartAmount[0].quantity} <GoArrowRight onClick={() =>
                        dispatch(increase(props.id))

                    } /></p>
                </div>
                
                <div className="subtotal">{Intl.NumberFormat('vi').format(cartAmount[0].quantity * detail[0].price)} VND</div>
                <div className="remove" onClick={() => dispatch(removeItem(props.id))}>
                    <button>Remove</button>
                </div>
            </div>}
            
        </div>
    );
};

export default CartItems;