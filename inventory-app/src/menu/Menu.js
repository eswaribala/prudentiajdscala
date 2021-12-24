import React from "react";
import './Menu.css'
//functional way of component
export const Menu=(props)=>{
    return (
      <div>
          {
              props.items.map(item => (
                  <button key={item.id}>
                      {item.name}
                  </button>
              ))
          }
      </div>
    );
}
