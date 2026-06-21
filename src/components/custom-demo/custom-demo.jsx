import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";

export function CustomDemo(){

    const [layoutName, setLayoutName] = useState('grid');

    function handleLayoutChange(e){
        setLayoutName(e.target.value);
    }

    return(
        <div className="container-fluid">
           <h2>Employees</h2>
           <select onChange={handleLayoutChange}>
              <option>Select Layout</option>
              <option value="grid">Grid</option>
              <option value="card">Card</option>
           </select>
           <DataGrid layout={layoutName} theme='table-dark' caption="Employee Details - Updated on Dec 2024" fields={['First Name', 'Last Name', 'Designation']} data={[{FirstName:'Kiran', LastName:'Kumar', Designation:'Manager'}, {FirstName:'Rakesh', LastName:'Kumar', Designation:'Developer'}]} footer="copyright 2024"/>
        </div>
    )
}              