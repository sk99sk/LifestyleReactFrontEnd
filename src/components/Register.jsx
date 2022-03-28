import React from 'react'

export default function Register() {
  return (
    <div className='container col-6'>
    <div style={{textAlign:"center",fontSize: "25px",
            fontWeight: "bolder",}}>
<h2>Register</h2><br/>
</div>


<form action="http://127.0.0.1:8080/SpringMVCHibernate/register" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" minlength="8" id="exampleInputPassword1" placeholder="Password" name="password"/>
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>
</form>


    </div>
  )
}
