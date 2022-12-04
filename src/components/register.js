import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = (props) => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastName = (event) => {
        setLastName(event.target.value);
    }


    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const userRegister = (event) => {
        event.preventDefault();
        //To Do ....

        axios.post('https://localhost:8080/register', {

        }).then(res => {
            alert("Register Successfully!!");
            navigate("/");
            console.log(res);
        }).catch(err => {
            alert(err);
        }
        );
    }

    return (
        <div>
            <center><h1>Register Page</h1></center>
            <center><form onSubmit={userRegister}>
                <input placeholder="First Name" className="form-control" type={"text"} name="firstname" onChange={changeFirstName}></input><br />
                <input placeholder="Last Name" className="form-control" type={"text"} name="lastname" onChange={changeLastName}></input><br />
                <input placeholder="Email" className="form-control" type={"text"} name="email" onChange={changeEmail}></input><br />
                <input placeholder="Password" className="form-control" type={"password"} name="password" onChange={changePassword}></input><br />
                <button className="btn btn-primary">Sign Up</button>
            </form></center>
        </div>
    );

};


export default Register;