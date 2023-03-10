import React, { useEffect } from 'react';
import ProductList from './ProductList';
import './ShopNav.css'
import { getCartItems } from '../../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../../../redux/cartSlice';
import { reset } from '../../../redux/cartSlice';

const ShopNav = () => {
    const { cartCategory, isLoading } = useSelector(state => state.cartSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartItems())
    },[])
    //handle click redux
    const HandleClick = (e) => {
        var pCatagory = e.target.innerHTML.toLowerCase()
        dispatch(category(pCatagory))
    }

    return (<>
        <div className='shop'>
            <div className='shop-nav'>
                {isLoading && <h1>LOADING...</h1>}
                <ul>
                    <h2>CATEGORIES</h2>
                    <li className='black-bar'>APPLE</li>
                    <li onClick={HandleClick}>ALL</li>
                    <li className='gray-bar'>IPHONE & MAC</li>
                    <li onClick={HandleClick}>iPhone</li>
                    <li onClick={HandleClick}>IPad</li>
                    <li onClick={HandleClick}>Macbook</li>
                    <li className='gray-bar'>WIRELESS</li>
                    <li onClick={HandleClick}>Airport</li>
                    <li onClick={HandleClick}>Watch</li>
                    <li className='gray-bar'>OTHER</li>
                    <li onClick={HandleClick}>Mouse</li>
                    <li onClick={HandleClick}>Keyboard</li>
                    <li onClick={HandleClick}>Other</li>
                </ul>
            </div>
            <div className='shop-cat'>
                {cartCategory?.map((items,i) => (<ProductList {...items} key={ i } />))}
            </div>
        </div>
    </>
    );
};

export default ShopNav;