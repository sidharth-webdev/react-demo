import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [users, setUsers] = useState([{UserId:''}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [toggle, setToggle] = useState('d-none');

    useEffect(()=>{
        axios.get('users.json')
        .then(response=>{
             setUsers(response.data);
        })
    },[])

    function VerifyUser(e){
        for(var user of users)
        {
            if(user.UserId===e.target.value){
                setMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }

    function VerifyCaps(e){
         if(e.which>=65 && e.which<=90) {
             setToggle('d-block');
         } else {
            setToggle('d-none');
         }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} /></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyCaps} /></dd>
                <dd className={toggle}>
                    <span className="bi bi-exclamation-triangle text-warning"> Warning : Caps ON</span>
                </dd>
            </dl>
        </div>
    )
}         