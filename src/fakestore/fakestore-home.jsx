import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function FakestoreHome(){
    const [categories, setCategories] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    const navigate = useNavigate();

    useEffect(()=>{

        if(cookies['username']) {
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response=>{
                 setCategories(response.data);
            })
        } else {
            navigate('/');
        }

    },[])

    function handleSignout(){
        removeCookie('username');
        navigate('/');
    }

    return(
        <div>
            <h5 className="d-flex justify-content-between"><span>Fakestore Home </span> <span> {cookies['username']}</span> <button onClick={handleSignout}>Signout</button> </h5>
            <ul className="list-unstyled w-25">
                {
                    categories.map(category=>
                        <li key={category} className="my-3" > <Link className="btn btn-dark w-100" to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>
                    )
                }
            </ul>
        </div>
    )
}           