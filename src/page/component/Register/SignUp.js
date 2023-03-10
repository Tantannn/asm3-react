import './signUp.css';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import { useState } from 'react';
function SignUp() {
    const navigate = useNavigate()

    const userArr = JSON.parse(localStorage.getItem('userArr')) || [];

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    class User {
        constructor(
            fullname,
            email,
            password,
            phone,

        ) {
            this.fullname = fullname;
            this.email = email;
            this.password = password;
            this.phone = phone;
        }
    }


    const onChangeName = e => {
        setFullName(e.target.value)
    }
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }
    const onChangePassword = e => {
        setPassword(e.target.value)
    }
    const onChangePhone = e => {
        setPhone(e.target.value)
    }
    // console.log(userArr);

    const validateAll = () => {
        if (!fullname) {
            alert('Vui lòng nhập FullName!')
            return ''
        }
        if (!email) {
            alert('Vui lòng nhập Email!')
            return ''
        }
        if (!isEmail(email)) {
            alert('Email không đúng định dạng!')
            setEmail(e.target.value = '')
            return ''
        }
         if (!userArr.every((x) => (x.email !== email ? true : false))) {
            alert('Email đã tồn tại!')
             setEmail('')
             return ''
        }
        if (password?.length < 8 || !password) {
            alert('Mật khẩu phải trên 8 ký tự!')
            setPassword('')
            return ''
        }
        if (!phone) {
            alert('Vui lòng nhập số điện thoại!')
            return ''
        }

        return true

    }

    const handleSignUp = (e) => {

        const user = new User(
            fullname,
            email,
            password,
            phone
        )

        e.preventDefault()
        const isValid = validateAll(user);
        if (isValid) {
            userArr.push(user)
            localStorage.setItem('userArr', JSON.stringify(userArr));
            alert('Đăng ký thành công');
            navigate('/Login');
        }
    }


    return (
        <div className="signup">
            <div className="signupContainer">
                <h2 className="titleColor">Sign Up</h2>

                <form className="signupInput">
                    <input type="text" placeholder="Full Name" onChange={onChangeName}></input>
                    <input type="email" placeholder="Email" onChange={onChangeEmail} ></input>
                    <input type="password" placeholder="Password" autoComplete="on" onChange={onChangePassword}></input>
                    <input type="text" placeholder="Phone" onChange={onChangePhone}></input>
                </form>

                <button type='button' className="signupBtn" onClick={handleSignUp} >SIGN UP</button>
                <div className="clickLogin">
                    <p> </p>
                    
                    <h6 className="titleColor">Login?         <span onClick={() => navigate('/Login')} className="linkSignIn">Click</span></h6>
                </div>
            </div>
        </div>
    );
}

export default SignUp;