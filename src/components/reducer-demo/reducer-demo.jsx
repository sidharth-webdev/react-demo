
import { useReducer } from "react";

let initialState= {
    viewersCount:0
}
 
function reducer(state, action){
    switch(action.type)
    {
        case "join":
        return {viewersCount: state.viewersCount + 1}
        case "exit":
        return {viewersCount: state.viewersCount - 1}
    }
}

export function ReducerDemo(){


    const [state, dispatch] = useReducer(reducer, initialState);

    function handleJoinClick(){
        dispatch({type: 'join'});
    }

    function handleExitClick(){
        dispatch({type: 'exit'});
    }

    return(
        <div className="container-fluid">
            <h3>Watch Live</h3>
            <iframe width="500" height="200" src="https://youtube.com/embed/ti6Ochpgxak"></iframe>
            <div className="mt-4">
            <div className="bi bi-eye">[{state.viewersCount}] Viewing</div>
            </div>
            <div className="mt-4 row">
                <div className="col">
                    <h3>user 1</h3>
                    <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary">join</button>
                    <button onClick={handleExitClick} className="bi bi-door-open btn btn-danger ms-2">Exit</button>
                </div>
                <div className="col">
                    <h3>User 2</h3>
                    <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary">join</button>
                    <button onClick={handleExitClick} className="bi bi-door-open btn btn-danger ms-2">Exit</button>
                </div>
            </div>
        </div>
    )
}                            