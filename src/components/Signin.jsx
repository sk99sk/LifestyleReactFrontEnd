import React from 'react';
import PropTypes from 'prop-types';
import {useState } from "react";
import useToken from '../useToken';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

async function loginUser(credentials) {
    return fetch('http://127.0.0.1:8080/SpringMVCHibernate/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Signin(props) {

   const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const {token,setToken } = props.Token;
  const { token, setToken } = props.Token;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cartItems","total"]);




  const handleSubmit = async e => {
    e.preventDefault();
    const tokenT = await loginUser({
      username,
      password
    });
    if(tokenT.token!="null"){
      setToken(tokenT);
      setCookie("cartItems", {}, { path: "/" });
      setCookie("total", 0, { path: "/" });
      navigate("/");
    }else{
      document.getElementById("emailHelp").innerText = "invalid Email or password"
    }
    

  }


  return (
    <div className='container col-6' >
      <div style={{textAlign:"center",fontSize: "25px",
            fontWeight: "bolder",}}>
<h2>Sign In</h2><br/>
</div>
<form>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"  onChange={e => setUserName(e.target.value)}/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password" name="password"     onChange={e => setPassword(e.target.value)}/>
  </div>
  <button onClick={handleSubmit}  className="btn btn-dark">Submit</button>
</form>


    </div>
  )
}

