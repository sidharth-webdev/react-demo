
import { useState } from "react"

export function MouseMove()
{
    const [imgStyle, setImgStyle] = useState({position:'', left:'', top:''});

    function handleMouseMove(e)
    {
        setImgStyle({position:'fixed', left:e.clientX + 'px', top:e.clientY + 'px'});
    }

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                Please move mouse pointer to test
            </div>
            <img style={imgStyle} src="bullet.gif" width="50" height="50"/>
        </div>
    )
}                         