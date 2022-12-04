import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const userLogin = (event) => {
        event.preventDefault();
        const loginCredentials = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8080/api/user/login', loginCredentials).then(res => {
            console.log(res.data)
            alert("Login Successfully!!");
            navigate("/users")
            console.log(res);
        }).catch(err => {
            alert(err);
        }
        );
    }

    return (
        <div>
            <center><h1>Login Page</h1></center>
            <center><form onSubmit={userLogin}>
                <input placeholder="Email" className="form-control" type={"text"} name="email" onChange={changeEmail}></input><br />
                <input placeholder="Password" className="form-control" type={"password"} name="password" onChange={changePassword}></input><br />
                <button className="btn btn-primary">Login</button>
            </form></center>
        </div>
    );

};


export default Login;