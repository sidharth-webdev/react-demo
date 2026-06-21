import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-event.css';


export function MouseEvents(){
    
    const [mobileImages, setMobileImages] = useState([{image:''}]);
    const [previewImage, setPreviewImage] = useState('m1.jpg');

    useEffect(()=>{

        axios.get('mobiles.json').then(response=>{
             setMobileImages(response.data);
        })

    },[]);

    function handleMouseOver(e){
        setPreviewImage(e.target.src);
    }

    return(
        <div className="container-fluid">
             <div className="row mt-4">
                <div className="col-1">
                    {
                        mobileImages.map(item=>
                            <div className="my-3" key={item.image}>
                                <img onMouseOver={handleMouseOver} src={item.image} width="100%" />
                            </div>
                        )
                    }
                </div>
                <div className="col-11">
                    <img  width="400" src={previewImage} height="400"/>
                </div>
             </div>   
        </div>
    )
}             