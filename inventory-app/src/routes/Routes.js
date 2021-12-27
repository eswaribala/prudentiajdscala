import React from "react";
import {Route, Router} from "react-router-dom";
import Home from "../home/Home";
import AddProduct from "../addproduct/AddProduct";
import ViewProduct from "../viewproduct/ViewProduct";


export class Routes extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/AddProduct" element={<AddProduct />}></Route>
                    <Route path="/ViewProduct" element={<ViewProduct />}></Route>

                </Router>
            </div>
        )
    }
}
