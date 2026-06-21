
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export function StateDemo(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userName, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleSigninClick(){
        setCookie('username', userName, {expires: new Date('2024-12-16')});
    }

    function handleSignout(){
        removeCookie('username');
    }

    useEffect(()=>{
       
    },[])

    return(
        <div className="container-fluid">
            <header className="mt-4 p-3 d-flex justify-content-between border border-2 border-dark">
                {
                    (cookies['username'])? <span>Hello ! {cookies['username']} <span className="badge rounded border border-1 border-dark rounded-circle"><img src="bullet.gif" width="20" height="20"/></span> <button className="btn btn-danger" onClick={handleSignout}>Signout</button> </span>:<span> Hello ! Guest <input onChange={handleNameChange} type="text"/> <button onClick={handleSigninClick}>Signin</button> </span>
                }
            </header>
        </div>
    )
}        