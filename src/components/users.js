import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const User = (props) => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const listUsers = () => {
        //To Do ....
        axios.get('http://localhost:8080/api/user/all').then(res => {
            console.log(res.data.data);
            setUsers(res.data.data)
        }).catch(err => {
            alert(err);
        }
        );
    }

    useEffect(() => {
        listUsers();
    }, []);

    return (
        <div>
            <center><h1>User Page</h1></center>
            <>{users.map((value, index) => (
                <div>
                    <p>{"First Name : "}{value.firstname}</p>
                    <p>{"Last Name  : "}{value.lastname}</p>
                    <p>{"Email  :"}{value.email}</p>
                </div>
            ))}</>
        </div>
    );

};


export default User;