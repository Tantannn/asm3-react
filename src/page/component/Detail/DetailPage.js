
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, addCart } from '../../../redux/cartSlice'
import './DetailPage.css'
import ButtonComponent from './../ReuseComp/ButtonComponent'
import ProductList from '../shop/ProductList';
import NavBar from '../Layout/NavBar'
import Footer from '../Layout/Footer'

const DetailPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartItems, isLoading } = useSelector(state => state.cartSlice)
    const Cart = JSON.parse(localStorage.getItem("Cart")) || []
    const [quantity, setQuantity] = useState()

    const { id } = useParams(); //Catch ID

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var detail = cartItems?.filter((item) => item._id.$oid == id)
    var relate = cartItems?.filter((item) => item.category == detail[0].category)
    let price = detail[0]?.price
    let name = detail[0]?.name
    
    // chuyển hướng về cart
    const HandleClick = () => {
        const cartItems = { quantity, id, price, name }
        dispatch(addCart(cartItems))
        navigate('/Cart')
    }

    return (
        <div>
            <NavBar />
            {isLoading && <h1>LOADING...</h1>}
            {detail[0] &&
                <div>
                    <div className='detail-page'>
                        <div>
                            <img src={detail[0].img1} className='' alt="" />
                            <img src={detail[0].img2} className='' alt="" />
                            <img src={detail[0].img3} className='' alt="" />
                            <img src={detail[0].img4} className='' alt="" />
                        </div>
                        <img src={detail[0].img1} className='' alt="" />
                        <div className='detail-des'>
                            <h2>{detail[0].name} </h2>
                            <p className='blur'>{numberWithCommas(detail[0].price)} VND</p>
                            <p className='blur'>{detail[0].long_desc}</p>
                            <p>CATEGORY: {detail[0].category}</p>
                            <p><input placeholder='QUANTITY' type="number" onChange={(e) => setQuantity(e.target.value)} /><ButtonComponent value='add to cart' onClick={HandleClick} /></p>
                        </div>
                    </div>
                    <h2 className='RELATEDRODUCTS'>RELATED PRODUCTS</h2>
                    <div className='relate-product'>{relate?.map((items, i) => (<ProductList {...items} key={i} />))}</div>
                </div>
            }
            <Footer/>
        </div>
    );
};

export default DetailPage;