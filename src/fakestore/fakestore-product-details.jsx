import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



export function FakestoreProductDetails(){

    const [product, setProduct] = useState({id:0, title:'', image:'', category:'', price:'', description:'', rating:{rate:0, count:0}});

    let params = useParams();

    useEffect(()=>{

            axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response=>{
                 setProduct(response.data);
            })

    },[params.id])


    return(
        <div>
            <h5>Details</h5>
            <dl>
                <img width="200" height="200" src={product.image} />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>
                    <span className="badge bg-success 
                    -white"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span> [{product.rating.count}]
                </dd>
            </dl>

        </div>
    )
}        