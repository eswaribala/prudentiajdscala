import React from "react";
import axios from "axios";
export const apiUrl='http://localhost:4000/'
export const fetchData= async ()=>{
        return await axios.get(apiUrl);
}

