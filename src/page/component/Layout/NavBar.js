import React from 'react';
import './NavBar.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from '../../../redux/authen.js';
import { FiUser , FiShoppingCart} from "react-icons/fi";

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { user, isLoggedIn } = useSelector(state => state.authSlice)

    const HandleClick = (params) => {
        dispatch(onLogout())
        navigate("/Login")
    }

    console.log(isLoggedIn);
    return (
        <nav>
            <ul>
                <li>
                    <a  className='nav-home' onClick={() => navigate("/")}>Home</a>
                    <a  onClick={() => navigate("/Shop")}>Shop</a>
                </li>
                <li>
                    <a  >BOUTIQUE</a>
                </li>
                <li>
                    {!isLoggedIn ? <a  onClick={() => navigate("/Login")}>Login</a> : ''}
                    <a  onClick={() => navigate("/Cart")} ><FiShoppingCart/>Cart</a>
                    {isLoggedIn ? <a  onClick={() => navigate("/Login")}><FiUser/>{user}</a> : ''}
                    {isLoggedIn ? <a  onClick={HandleClick}>(Log Out)</a> : ''}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;