import React from 'react';
import './ProductList.css'
import {
    BrowserRouter as Router,
    Link,   
} from "react-router-dom";
import Detail from '../../detail/Detail';
const ProductList = (props) => {
    // console.log(props._id.$oid);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const HandleClick = (params) => {

    }

    return (<>
        <Link to={"/Detail/" + props._id.$oid}>

            <div className='product-list' onClick={HandleClick}>
                <img src={props.img1} className='' alt="" />
                <div>
                    <h3>{props.name} </h3>
                    <p className='blur'>{numberWithCommas(props.price)} VND</p>
                </div>
            </div>
        </Link>

    </>);
};

export default ProductList;