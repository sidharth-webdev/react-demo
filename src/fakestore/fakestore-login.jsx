import { useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function FakestoreLogin(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleLoginClick(){
        setCookie('username', userName);
        navigate('/home');
    }

    return(
        <div>
            <dl>
                <h4>User Login</h4>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-warning">Login</button>
        </div>
    )
}         