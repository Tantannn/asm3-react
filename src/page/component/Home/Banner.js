import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ReuseComp/ButtonComponent";
import './Banner.css'
function Banner({ }) {
    const navigate = useNavigate()
    return <div className="banner-container">
        <img src="/images/banner1.jpg" alt="" />
        <div className="banner-text">
            <p>NEW INSPIRATION 2020</p>
            <h1>20% OFF ON NEW SEASON</h1>
            <ButtonComponent  
                value="Browse collections" onClick={()=>navigate('./Shop')}></ButtonComponent>
        </div>
    </div>;
}
export default Banner


