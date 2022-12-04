import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const User = (props) => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const listUsers = (event) => {
        event.preventDefault();
        //To Do ....

        axios.get('https://localhost:8080/user', {

        }).then(res => {
            alert(res.data);
            console.log(res);
        }).catch(err => {
            alert(err);
        }
        );
    }

    return (
        <div>
            <center><h1>User Page</h1></center>
            {/* To do ---> loop  */}
            <>{listUsers}</>
        </div>
    );

};


export default User;