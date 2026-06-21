import { useState } from "react";


export function FormDemo(){


    const [product, setProduct] = useState({Id:0, Name:'', Price:0, Stock:false, City:''});
    const [nameError, setNameError] = useState('');
    const [cityError, setCityError] = useState('');

    function handleIdChange(e){
        setProduct({
            Id: e.target.value,
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock,
            City: product.City
        })
    }

    function handleNameChange(e){
        setProduct({
            Id: product.Id,
            Name: e.target.value,
            Price: product.Price,
            Stock: product.Stock,
            City: product.City
        })
    }

    function handlePriceChange(e){
        setProduct({
            Id: product.Id,
            Name: product.Name,
            Price: e.target.value,
            Stock: product.Stock,
            City: product.City
        })
    }

    function handleStockChange(e){
        setProduct({
            Id: product.Id,
            Name: product.Name,
            Price: product.Price,
            Stock: e.target.checked,
            City: product.City
        })
    }

    function handleCityChange(e){
        setProduct({
            Id: product.Id,
            Name: product.Name,
            Price: product.Price,
            Stock: product.Stock,
            City: e.target.value
        })
    }


    function handleRegisterClick(e){
        e.preventDefault();
        console.log(product);
    }

    function handleNameBlur(e){
        if(e.target.value===""){
            setNameError('Product Name Required');
        } else {
            setNameError('');
        }
    }

    function handleCityBlur(e){
        if(e.target.value=== "Select City" || e.target.value===""){
            setCityError('city Name Required');
        } else {
            setCityError('');
        }
    }


     return(
        <div className="container-fluid">
           <form onSubmit={handleRegisterClick}>
           <h2>Register Product</h2>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="number" value={product.Id} onChange={handleIdChange} /></dd>
                <dt>Name</dt>
                <dd><input type="text" onBlur={handleNameBlur} value={product.Name} onChange={handleNameChange} /></dd>
                <dd className="text-danger">{nameError}</dd>
                <dt>Price</dt>
                <dd><input type="number" value={product.Price} onChange={handlePriceChange} /></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" checked={product.Stock} onChange={handleStockChange} /> <label>Available</label> </dd>
                <dt>Shipped To</dt>
                <dd>
                    <select value={product.City} onBlur={handleCityBlur} onChange={handleCityChange}>
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                    <dd className="text-danger">{cityError}</dd>
                </dd>
            </dl>
            <button type="submit">Register</button>
           </form>
        </div>
     )
}               