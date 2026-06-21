import { useState } from "react"


export function ClipboardDemo(){
    const [status, setStatus] = useState('');

    function handleCopy(){
        setStatus('Copied to Clipboard');
    }
    function handleBlur(){
        setStatus('');
    }

    function handlePaste(){
        document.onpaste = ()=> false;
    }

    function handleContext(){
        alert('Right Click Disabled');
        document.oncontextmenu = ()=> false;
    }
    function handleDoubleclick(){
        window.open('m1.jpg', ' Mobile','width=400 height=500');
    }

    return(
        <div className="container-fluid" style={{height:'100vh'}} onContextMenu={handleContext}>
            <img onDoubleClick={handleDoubleclick} src="m1.jpg" height="100" width="100"/>
            <p>Double click to view large</p>
              <dl className="mt-4">
                    <dt>Your Account Number</dt>
                    <dd><input type="text" onBlur={handleBlur} onCopy={handleCopy} /></dd>
                    <dd>{status}</dd>
                    <dt>Verify Account Number</dt>
                    <dd><input type="text" onPaste={handlePaste} /></dd>
              </dl>
        </div>
    )
}      