import { useState } from 'react';
import './mouse-animation.css';

export function MouseAnimation(){

    const [initialState, setInitialState] = useState({animationName:'Spin', animationDuration:'4s', animationIterationCount:'infinite', animationTimingFunction:'linear'});

    function handleMouseOver(){
        setInitialState({
            animationName:'Spin',
            animationDuration:'1s',
            animationIterationCount:'infinite',
            animationTimingFunction:'linear',
        })
    }

    function handMouseOut(){
        setInitialState({
            animationName:'Spin',
            animationDuration:'4s',
            animationIterationCount:'infinite',
            animationTimingFunction:'linear',
        })
    }

    function handMouseDown(){
        setInitialState({
            animationName:'Zoom',
            animationDuration:'4s',
            animationIterationCount:'infinite',
            animationTimingFunction:'linear',
        })
    }

    return(
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img src='logo192.png' onMouseDown={handMouseDown} onMouseOut={handMouseOut}  onMouseOver={handleMouseOver} style={initialState} />
        </div>
    )
}         