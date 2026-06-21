
import { useState } from "react"


export function ClassBinding(){

    const [theme, setTheme] = useState('border-dark');
    const [btnTheme, setbtnTheme] = useState('btn-dark');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border-secondary bg-dark text-light');
            setbtnTheme('btn-light');
        } else {
            setTheme('border-dark');
            setbtnTheme('btn-dark');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <form className={`border border-2 p-4 rounded ${theme}`}>
                <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className="form-check-input" /> <label className="form-check-lable">Dark Mode</label>
                </div>
                <h3 className="bi bi-person-fill"> User Login </h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className={`btn w-100 ${btnTheme}`}>Login</button>
            </form>
        </div>
    )
}        