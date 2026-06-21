import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";



export function FakestoreProducts()
{
    let [products, setProducts] = useState([{id:0, title:'', image:'', category:'', price:'', description:'', rating:{rate:0, count:0}}]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    let params = useParams();

    let navigate = useNavigate();

    useEffect(()=>{

        if(cookies['username']){
            axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
             setProducts(response.data);
        })
        } else {
            navigate('/');
        }

    },[])

    function handleBackClick(){
        navigate("/");
    }


    return(
        <div>
            <h5> {params.category.toUpperCase()} PRODUCTS </h5>
            <div className="row">
                <div className="col-6">
                <main className="d-flex flex-wrap">
                    {
                        products.map(product=>
                            <div className="card m-2 p-2" style={{width:'100px'}}>
                                <Link to={`details/${product.id}`}>
                                <img className="card-img-top" height="100" src={product.image} />
                                </Link>
                            </div>
                        )
                    }
                   
                 </main>
                 <div>
                        <button onClick={handleBackClick} className="btn btn-warning"> Back to Categories </button>
                    </div>
                </div>
                <div className="col-6">
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}       