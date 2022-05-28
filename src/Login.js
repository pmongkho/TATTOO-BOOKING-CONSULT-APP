import React from 'react'
import { Avatar, Button } from "@mui/material";
import './Login.css'


function Login() {
  return (
    <div className="login">
        
      <div className="login__logo">
          <div className="login__welcome"><h1>Tattometry</h1> by AzulaCorp</div>
          <div className="avatar"><Avatar
          alt="AzulaTech"
          src={require("./azulaLogo.png")}
          sx={{ width: 200, height: 200 }}
        /></div>
        

        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login