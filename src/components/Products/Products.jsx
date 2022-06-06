import React, { useSyncExternalStore } from "react";

import React ,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';


const Products = () => {
  const [Products,setProduct]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
      let r=await fetch("http://localhost:8080/product");
      let d=await r.json();
      setProduct(d);
      console.log(d)
    };
    fetchdata();
  },[])
  console.log(products)
  return ( 
  <div>
    product:{" "}
    <div>
      {products.map((p)=>(
        <div>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
    </div>
     ))}
  </div>
  </div>    
  )
};

export default Products;
