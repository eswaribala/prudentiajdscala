import React from "react";
import './Menu.css'
import {Route, HashRouter, Routes} from 'react-router-dom'
import Home from '../home/Home'
import {AddProduct} from "../addproduct/AddProduct";
import ViewProduct from "../viewproduct/ViewProduct";
//functional way of component
export const Menu=(props)=>{
    return (
     <HashRouter >
      <div className='vertical-style'>
          {
              props.items.map(item => (
                  <div  key={item.menuId}>
                  <button key={item.menuId} className="btn-style"
                          onClick={()=>{ window.location.hash=item.path}}>
                      {item.name}
                  </button>
                  </div>
              ))
          }
      </div>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home"element={<Home />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/ViewProduct" element={<ViewProduct />}></Route>
      </Routes>
     </HashRouter>
    );
}
