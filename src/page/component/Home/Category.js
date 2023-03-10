import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css'
const Category = () => {
    const navigate = useNavigate()
    return (
        <div className='category' onClick={() => navigate('./Shop')}>
            <p className='blur '>CAREFULY CREATED COLLECTIONS</p>
            <h2 className=''>BROWSE OUR CATEGORIES</h2>
            <div className='category-img1'>
                <img src="/images/product_1.png" alt="" />
                <img src="/images/product_2.png" alt="" />
            </div>

            <div className='category-img'>
                <img src="/images/product_3.png" alt="" />
                <img src="/images/product_4.png" alt="" />
                <img src="/images/product_5.png" alt="" />
            </div>

        </div>
    );
};

export default Category;