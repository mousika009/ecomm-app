import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = () => {

    if(!username || !password){
      alert("All fields required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u=>u.username===username);
    if(exists){
      alert("User already exists");
      return;
    }

    users.push({username,password,role});
    localStorage.setItem("users",JSON.stringify(users));

    alert("Signup successful");
    navigate("/login");
  };

  return(
    <div style={{textAlign:"center",padding:"120px"}}>
      <h2>Signup</h2>

      <input type="text" placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)} /><br/><br/>

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} /><br/><br/>

      <select onChange={(e)=>setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select><br/><br/>

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
