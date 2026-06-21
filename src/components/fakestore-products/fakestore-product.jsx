import axios from "axios";
import { useEffect, useRef, useState } from "react"


export function FakestoreProducts()
{

    const [product, setProduct] = useState({id:0, title:'', image:'', description:'', price:0, rating:{rate:0, count:0}, category:''});
    const [status, setStatus] = useState('');

    let count = useRef(1);
    let thread = useRef(null);

    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
             setProduct(response.data);
        });
    }

    function LoadProductAuto(){
        count.current = count.current + 1;
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
        .then(response=>{
            setProduct(response.data);
        });
    }

    useEffect(()=>{
        LoadProduct(1);
        console.log(product);
    },[])

    function handleNextClick(){
        count.current = count.current + 1;
        LoadProduct(count.current);
    }

    function handlePrevClick(){
        count.current = count.current - 1;
        LoadProduct(count.current);
    }

    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Running');
    }

    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }

    function handleSeekbarChange(e){
        count.current = e.target.value;
        LoadProduct(count.current);
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4 w-50">
                <div className="card-header text-center">
                    <div>{product.title}</div>
                    <div className="mt-2 fw-bold">{status}</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="bi bi-chevron-left btn btn-dark"></button>
                        </div>
                        <div className="col-10 text-center position-relative">
                            <div className="badge fs-6 position-absolute end-0 top-0 bg-danger rounded rounded-circle">
                                {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}
                            </div>
                            <img width="100%" src={product.image} height="300" />
                            <div>
                                <input onChange={handleSeekbarChange} type="range" min="1" value={count.current} max="20" className="form-range"/>
                            </div>
                        </div>
                        <div className="col-1  d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="bi bi-chevron-right btn btn-dark"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-primary bi bi-play"></button>
                    <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause ms-2"></button>
                </div>
            </div>
        </div>
    )
}            