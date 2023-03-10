import React from 'react';
import './Cart.css'
import CartItems from './CartItems';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiCart } from "react-icons/bi";


const Cart = () => {
  const { cartArr } = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(cartArr);
  var total = 0

  //tinh tổng tiền
  cartArr.forEach((item) => {
    var price
    price = item.quantity * item.price
    total += price
  });
  console.log(total);


  return (<>
      <div className="checkoutBanner">
        <h3>CART</h3>
        <div className="checkoutBannerTitle">
          <h6>CART</h6>
        </div>
      </div>
    <main>
      <h1><i>Shoping Cart</i></h1>
      <div className="basket">
        <div className="basket-labels">
          <ul>
            <li className="item item-heading"><strong><i>ITEM</i></strong></li>
            <li className="price"><strong><i>PRICE</i></strong></li>
            <li className="quantity"><strong><i>QUANTITY</i></strong></li>
            <li className="subtotal"><strong><i>TOTAL</i></strong></li>
          </ul>
        </div>

        {cartArr.map((x, i) => (<CartItems key={i} id={x.id} quantity={x.quantity} />))}
        <ul>
          <li><button onClick={() => navigate('/Shop')} ><i><GoArrowLeft /> Continue Shopping</i></button></li>
          <li class='float-rightaa'><button onClick={() => navigate('/Checkout')}><i>   Proceed to Checkout <GoArrowRight />  </i></button></li>
        </ul>
      </div>
      <aside>
        <div className="summary">
          <div className="summary-total-items"><span className="total-items"></span><i>CART TOTAL</i></div>
          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value" id="basket-total">{Intl.NumberFormat('vi').format(total)} VND</div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta"><BiCart/> Apply Coupon</button>
          </div>
        </div>
      </aside>

    </main>
    </>
  );
};

export default Cart;