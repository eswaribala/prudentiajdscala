import React from "react";
import axios from "axios";
const apiUrl='http://localhost:4000/'
export const FetchData= async query=>{
        return await axios.get(apiUrl);
}
