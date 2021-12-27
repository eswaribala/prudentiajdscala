import React from "react";
import {shallow,mount} from 'enzyme'
import {Routes} from './Routes'
import Home from '../home/Home'
import AddProduct from "../addproduct/AddProduct";
import ViewProduct from "../viewproduct/ViewProduct";
import {Route} from "react-router-dom";
import * as path from "path";
let pathMap={}
describe('routes using array of routes',()=>{
    beforeAll(()=>{
        const component=shallow(<Routes/>);
        pathMap=component.find(Route).reduce((pathMap,route)=>{
            const routeProps=route.props();
            pathMap[routeProps.path]=routeProps.component;
            return pathMap;
        },{});
        console.log(pathMap);
    })
    it('should show Home component',()=>{
        expect(pathMap['/Home']).toBeFalsy();
    })
})
