import React from 'react';
import './Popup.css'
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../ReuseComp/ButtonComponent'
import { hidepop } from '../../../redux/popUp'
import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Link,   
} from "react-router-dom";


const Popup = (props) => {
    const navigate = useNavigate()

    const { pop } = useSelector(state => state.popup)

    const dispatch = useDispatch()
    const HandleClick = (e) => {
        e.preventDefault()
        dispatch(hidepop())
    }


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    console.log(props.pop.id);
    return (<>
        <div className='popupBackground' onClick={HandleClick} />
        {pop ? <div className='pop-up' >
            <img src={props.pop.img1} className='' alt="" />
            <div>
                <h3>{props.pop.name} </h3>
                <p className='blur'>{numberWithCommas(props.pop.price)} </p>
                <p className='blur'>{props.pop.long_desc} </p>
                <Link to={"/Detail/" + props.pop.id}>
                    <ButtonComponent value='View Detail' ></ButtonComponent>
                </Link>
            </div>
            <a href='' onClick={HandleClick}>X</a>
        </div> : ''}
    </>);
};

export default Popup;