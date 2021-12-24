import React from "react";
import './Menu.css'
//functional way of component
export const menu=(props)=>{
    return (
      props.items.map(item=>(
          <button key={item.id}>
              {item.name}
          </button>
      ))
    );
}
