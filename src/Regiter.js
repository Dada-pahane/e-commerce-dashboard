import React, { useState, useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function Regiter() {


  
    const [username, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const linkRef = useRef(null);



   

    async function SingUpUser() {
        console.log(username, email)

        let _User = JSON.stringify({
            "username": username,
            "email": email
        });
        let Result = await fetch("https://localhost:7176/api/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: _User
        });
        Result = await Result.json();
        console.log(Result);
        localStorage.setItem("user-info", JSON.stringify(Result));
        linkRef.current.click();
      

    }
    return (
        <div>
   
   <span style={{ display: 'none' }}>
                <Link id="link_add" to="/add" ref={linkRef}>Add Product</Link>
            </span>
            <Header />
            <h1>Sing Up</h1>

            <input type="text" placeholder="username" value={username} onChange={(e) => SetUsername(e.target.value)} />
            <br></br>  <br></br>
            <input type="text" placeholder="email" value={email} onChange={(e) => SetEmail(e.target.value)} />
            <br></br>  <br></br>
            <button onClick={SingUpUser}>Sing Up</button>

        </div>

    )
}
export default Regiter;