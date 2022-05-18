import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsernaem] = useState("");
  const [password, setPassword] =  useState("");

  const login = () => {
    const request = {
      email:username,
      password:password
    }

    axios.post("https://reqres.in/api/login", request).then(res => {
      localStorage.setItem("access_token", res.data.token); 
      console.log(res.data);
    }, error => {
      alert("Wrong username or password!")
    })
    console.log(request)
  }

  const logout = () => {
    localStorage.clear();
  }
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter username" value={username} onChange={$event => setUsernaem($event.target.value)}/>
      </div>
      <div>
        <input type="password" placeholder="Enter password" value={password} onChange={$event => setPassword($event.target.value)}/>
      </div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}


export default Login;