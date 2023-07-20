import { ManifactursSlice } from "@/store/redusers/Manifacturs";
import React, {useState} from "react";
import { useAppDispatch } from "@/hooks/redux";

const SideBurProductsManifacturs = (props)=>{
    return(
        <div>
          {props.manifacturs.map((manifactur, index)=>
           <div key={manifactur.id}>
            <input 
            checked={manifactur.checked || ''}
            onChange={(e)=>{
                const newManifacturs = Object.assign([], props.manifacturs);
                newManifacturs[index].checked = e.target.checked;
                props.setManifacturs(newManifacturs);
              
            }}
            type="checkbox" />
            <label>{manifactur.NameManufacturers}</label>
           </div>
           )
           }
        </div>
    )
}

export default SideBurProductsManifacturs;

function dispatch(arg0: unknown) {
    throw new Error("Function not implemented.");
}
