import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Admin(){

  const [products,setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    const saved = JSON.parse(localStorage.getItem("products"));

    if(saved){
      setProducts(saved);
    }else{
      axios.get("https://dummyjson.com/products")
      .then(res=>{
        localStorage.setItem("products",
          JSON.stringify(res.data.products)
        );
        setProducts(res.data.products);
      });
    }

  },[]);

  const removeProduct = (id)=>{
    const updated = products.filter(p=>p.id!==id);
    setProducts(updated);
    localStorage.setItem("products",JSON.stringify(updated));
  };

  const logout = ()=>{
    localStorage.clear();
    navigate("/login");
  };

  return(
    <>
    <Header/>
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h2>Admin Dashboard</h2>

      <button onClick={logout}>Logout</button>

      {products.map(p=>(
        <div key={p.id} style={{border:"1px solid black",margin:"20px",padding:"10px"}}>
          <img src={p.thumbnail} width="100" alt={p.title}/>
          <h3>{p.title}</h3>
          <p>Price: ₹{p.price}</p>
          <p>Stock: {p.stock}</p>

          <button onClick={()=>removeProduct(p.id)}>
            Delete Product
          </button>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}

export default Admin;
