import React from "react";
import './Menu.css'
import {Route, HashRouter, Routes} from 'react-router-dom'
import {Home} from '../home/Home'
import {AddProduct} from "../addproduct/AddProduct";
import {ViewProduct} from "../viewproduct/ViewProduct";
//functional way of component
export const Menu=(props)=>{
    return (
     <HashRouter>
      <div >
          {
              props.items.map(item => (
                  <div className='vertical-style'>
                  <button key={item.id} className="btn-style">
                      {item.name}
                  </button>
                  </div>
              ))
          }
      </div>
      <Routes>
          <Route path="/Home" component={Home}></Route>
          <Route path="/AddProduct" component={AddProduct}></Route>
          <Route path="/ViewProduct" component={ViewProduct}></Route>
      </Routes>
     </HashRouter>
    );
}
