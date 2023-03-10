import { useNavigate } from 'react-router-dom';
import './login.css'
import { useDispatch, useSelector } from "react-redux";
// import { authSlice } from '../../../redux/store.js';
import { useState } from 'react';
import { onLogin } from '../../../redux/authen.js';



function LogIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoggedIn } = useSelector(state => state.authSlice)
    console.log(isLoggedIn);
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    console.log(userArr);
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }
    const onChangePassword = e => {
        setPassWord(e.target.value)
    }

    const validateAll = () => {

        if (!userArr.find(value => email ===  value.email) || !email) {
            alert('Email không chính xác!')
            setPassWord('')
            return ''
        }
        if (!userArr.find(value => value.password == password)  || !password) {
            alert('Password không chính xác!')
            setPassWord('')
            return ''
        }
        return true
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userArr.filter(x => email === x.email));
        const isValid = validateAll();
        if (isValid) {
            var userName = userArr.filter(x => email === x.email)
            dispatch(onLogin(userName[0].fullname))
            alert('Đăng nhập thành công')
            navigate('/')
        }
    }



    return (
        <>
            {/* <Navbar /> */}
            <div className="login">
                <div className="loginContainer ">
                    <div className="loginContent">
                        <h2 className="titleGlobal">Sign In</h2>

                        <form className="loginInput">
                            <input type="email" placeholder="Email"  onChange={onChangeEmail}></input>
                            <input type="password" placeholder="Password" value={password} onChange={onChangePassword}></input>
                            <button type="submit"  className="loginBtn" onClick={onSubmit}>SIGN IN</button>
                        </form>

                        <div className="createAccountt">
                            <p> </p>
                            <p className="titleGlobal">Create an account?</p>
                            <span onClick={() => navigate('/Register')} className="linkSignUp">Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;