import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

let searchContext = createContext(null);

export function SearchResults(){

    let data = useContext(searchContext);

    const [products, setProducts] = useState([{id:0, title:'', image:'', price:0, category:'', description:'', rating:{rate:0, count:0}}]);

    function LoadSearchResults(category){
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response=>{
             setProducts(response.data);
        })
    }

    useEffect(()=>{
        if(data===""){
            LoadSearchResults('jewelery');
        }
        else {
            LoadSearchResults(data);
        }
       
    },[data])

    return(
        <div>
            <h4 className="text-primary">Search Results</h4>
           <div className="d-flex flex-wrap">
           {
                products.map(product=>
                 <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                    <img className="card-img-top"  src={product.image} height="140" />
                    <div className="card-header">
                        {product.title}
                    </div>
               
                </div> )
            }
           </div>
        </div>
    )
}

export function ContextDemo(){


    const [searchString, setSearchString] = useState('');
    const [contextMemory, setContextMemory] = useState('');

    function handleSearchChange(e){
        setSearchString(e.target.value);
    }

    function handleSearchClick(){
        setContextMemory(searchString);
    }


    return(
        <div className="p-2 bg-dark mt-2">
             <header className="d-flex justify-content-between text-white">
                <div className="h3">Shopper.</div>
                <div>
                <div className="input-group">
                    <input type="text" onChange={handleSearchChange} className="form-control" placeholder="Search Shopper." />
                    <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
                </div>
                </div>
                <div>
                    <span className="bi bi-cart4"></span>
                    <span className="bi bi-person-fill"></span>
                </div>
             </header>
             <section className="bg-light p-3" style={{height:'500px'}}>
                <searchContext.Provider value={contextMemory}>
                    <SearchResults />
                </searchContext.Provider>
             </section>
        </div>
    )
}                         