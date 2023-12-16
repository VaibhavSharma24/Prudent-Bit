import React from "react"
import image from "../images/imgboy.jpeg"
import music from "../images/music.svg"

function Login() {
    return(
        <div className="login-page">
        <div className="login-1">
            <h2 className="login-text">Welcome Back !</h2>
            <div className="logo-design">
            <img className="logo" src={music} width={100} height={100} alt="logo"/>
       <span className="logo-content">Music</span>
       <span className="logo-content2">Stream</span>
       </div>
            
            <form action="" className="credentials"> 
				<div> 
					<input type="text" name="email" id="username" placeholder="Username"/> 
				</div> 
				<div>
					<input type="text" name="passw" id="username" placeholder="Password"/> 
				</div>  
                <h3>Forget Password</h3>
				<button type="submit" className="login-btn">Login</button>
			</form>
        </div>
        <div>
        <img className="image-login" src={image} alt="boyimage" />
        </div>
        </div>
    )
}

export default Login;
