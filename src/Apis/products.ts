import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export function getProductsByQuery(query : string){
    return axios.get('/products/search?q='+query).then((res)=>{
        return res.data;
    })
}

