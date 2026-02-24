import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Cart(){

  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  },[]);

  const removeItem = (index)=>{
    const updated = cartItems.filter((_,i)=>i!==index);
    setCartItems(updated);
    localStorage.setItem("cart",JSON.stringify(updated));
  };

  let total = 0;
  cartItems.forEach(item=> total += item.price);

  return(
    <>
    <Header/>
    <div style={{textAlign:"center",marginTop:"120px"}}>
      <h2>Your Cart</h2>

      {cartItems.map((item,index)=>(
        <div key={index}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <button onClick={()=>removeItem(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
    <Footer/>
    </>
  );
}

export default Cart;
