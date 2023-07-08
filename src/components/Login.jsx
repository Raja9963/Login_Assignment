import React, { useState } from "react";
import './login.css'
import loginWelcome from '../images/loginWelcome.png';
import loginWelcome2 from '../images/Group.svg';
import loginWelcome3 from '../images/hello.png';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import 'axios'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [useremail,setUserEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return(
        <div className="login-container">
            <div className='header-logo'>
                <img src={logo} alt='logo'></img>
                <h3 style={{color:'white'}}>Logo</h3>
            </div>
            <div className="login-container-main">
                <div className="image-section">
                    <img src={loginWelcome2} alt="login-welcome-image" style={{width:'80%',marginTop:'50px'}}/>
                </div>
                <div className="login-form">
                    <div className="heading">
                        <h4>Login to you account</h4>
                    </div>
                    <div>
                        <div className="email-input">
                            <FontAwesomeIcon className="fa-icon-email" icon={faEnvelope}/>
                            <input type="email" placeholder="hello@example.com" value={useremail} onChange={(e)=>{
                                setUserEmail(e.target.value)
                            }}/>
                        </div>
                        <div className="password-input">
                            <FontAwesomeIcon className="fa-icon-lock" icon={faLock}/>
                            <input type="password" value={password} onChange={(e)=>{
                                setPassword(e.target.value);
                            }}></input>
                        </div>
                        <div className="term-conditions">
                            <input type="checkbox"/>&nbsp;<label style={{height:'100%'}}>I agree to the Terms & Conditions</label>
                        </div>
                    </div>
                    <button className="submit-btn" onClick={()=>{
                        console.log(useremail,password)
                        axios.post("https://dev.enitiate.gg/api/v1/user/auth/login",{
                            email:useremail,
                            password:password
                        }).then((res)=>{
                            navigate("/success")
                        }).catch((e)=>{
                            console.log(e);
                        })
                    }}>Login</button>
                </div>
            </div>
        </div>
    )
}