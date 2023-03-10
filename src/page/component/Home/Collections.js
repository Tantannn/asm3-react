import React, { useEffect, useState } from 'react';
import './Collections.css'
import Popup from './Popup';
import { useDispatch, useSelector } from 'react-redux';
import { showpop } from '../../../redux/popUp'
import { getCartItems } from '../../../redux/cartSlice'

const Collection = (prop) => {
    const [popDetail, setPopDetail] = useState()
    // add number With Commas: 100.000.00
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    
    const {cartItems, isLoading} = useSelector(state => state.cartSlice)
    const { pop } = useSelector(state => state.popup)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getCartItems())
    },[])

    const HandleClick = (f) => {
        dispatch(showpop())
        setPopDetail(
            {
                price: f.target.getAttribute('price'),
                category: f.target.getAttribute('category'),
                img1: f.target.getAttribute('img1'),
                long_desc: f.target.getAttribute('long_desc'),
                name: f.target.getAttribute('name'),
                id: f.target.getAttribute('id'),
            }
            )
            // console.log(f.target);
    }
    return (
        <div>
            {/* <h2>{cartItems.map(i => (<p>{ i.img1}</p>)) }</h2> */}
            <div id='colection'>
            {isLoading && <h1>LOADING...</h1> }
                <p className='blur'>MADE THE HARD WAY</p>
                <h2>TOP TRENDING PRODUCTS</h2>
                <div id='grid-container' >
                    {cartItems?.map((items, i) => (
                        <div key={i} onClick={HandleClick} >
                            <div  >
                                <img src={items.img1} {...items} id={items._id.$oid } className='' alt="" />
                                <p>{items.name} </p>
                                <p className='blur'>{numberWithCommas(items.price)} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Popup pop={popDetail}/>         */}
            {pop ? <Popup pop={popDetail} /> : ''}
        </div>
    );
};


export default Collection;