import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css"

export default function Login(props) {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })//will convert the object into type JSON
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.auth_token);
            navigate("/");
        }
        else {
            console.log("Error");
        }


    }
    return (
        <div className='login-section'>
            <div className="login-subsection d-flex flex-row justify-content-center align-items-center">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><h3>Email address</h3> </label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ><h3>Password</h3></label>
                        <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Forgot Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "white", color: "black" }}>Login</button>
                    <Link to="/signup"><button type="button" className="btn" style={{ backgroundColor: "#FFFFFF", color: "black" }}>SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}
