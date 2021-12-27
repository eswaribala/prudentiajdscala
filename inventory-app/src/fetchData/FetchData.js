import React from "react";
import axios from "axios";
export const apiUrl='http://localhost:4000/products'
export const fetchData= async (obj)=>{
        return await axios.post(apiUrl,obj);
}

