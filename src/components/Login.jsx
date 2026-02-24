import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      u=>u.username===username && u.password===password
    );

    if(validUser){

      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("role",validUser.role);
      localStorage.setItem("username",validUser.username);

      navigate("/home");

    }else{
      alert("Invalid credentials");
    }
  };

  return(
    <div style={{textAlign:"center",padding:"120px"}}>
      <h2>Login</h2>

      <input type="text" placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)} /><br/><br/>

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} /><br/><br/>

      <button onClick={handleLogin}>Login</button>

      <p>New user? <Link to="/signup">Register here</Link></p>
    </div>
  );
}

export default Login;
