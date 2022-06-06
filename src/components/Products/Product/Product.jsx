import React,{useState,useEffect, useContext} from "react";
import axios from 'axios'
import { CartContext } from "../../../context/CartContext";
const Product = () => {
  // Note: this id should come from api
  
const {addtocart} =useContext(CartContext)
const{removetocart}=useContext(CartContext)
const {count}=useContext(CartContext)
  const[data,setdata]=useState([])

  const [page,setpage]=useState(1)
  const[counter,setcounter]=useState(1)
  const handleadd=()=>{
          setcounter(counter+1)
  }
  const handlesub=()=>{
    setcounter(counter-1)
}
  useEffect(()=>{
  
    const getdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products`);
      console.log(r.data);
      setdata(r.data)
      console.log(r.data)
    }

    getdata()
  },[page])
  const product = { id: 1 };
  return (
  
     
          <div>
      {data.map((data,index)=>(

     
    <div data-cy={`product-${product.id}`}>
     
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addtocart}>ADD TO CART</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={handleadd}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            <button>{counter}</button>
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handlesub} disabled={counter===0}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={removetocart} disabled={count===0}>REMOVE TO CART</button>
      </div>
    </div>
   
   ))}
 </div>
     
  );
};

export default Product;