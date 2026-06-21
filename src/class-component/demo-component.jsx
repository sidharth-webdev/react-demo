import React from "react";
import { DataCard } from "../controlled-components/data-card";


export class DemoComponent extends React.PureComponent
{
     constructor(){
         super();
     
     }

   

     render(){
        return(
            <div className="container-fluid">
                <h2>Product Details</h2>
                <DataCard cardTitle='Samsung TV'items={['LED','QLD','OLED']}/>
            </div>
        )
     }
}          