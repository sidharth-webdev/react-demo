import { useEffect, useRef, useState } from "react"


export function DebounceDemo()
{
    const [now, setNow] = useState();

    function Timer(){
        var d = new Date();
        setNow(d.toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(Timer,1000);
    },[])

    return(
        <div className="container-fluid">
             <h1 className="text-center">{now}</h1>
        </div>
    )
}                        