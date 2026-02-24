import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

function Products1(){

  const [products,setProducts] = useState([]);
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");

  const role = localStorage.getItem("role");

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

  // ✅ ADD PRODUCT (ADMIN)
  const addProduct = ()=>{

    if(!title || !price){
      alert("Enter all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),   // unique id
      title: title,
      price: Number(price),
      thumbnail: image || "https://via.placeholder.com/150"
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    setTitle("");
    setPrice("");
    setImage("");
  };

  // ✅ DELETE PRODUCT (ADMIN)
  const deleteProduct = (id)=>{
    const updated = products.filter(p=>p.id!==id);
    setProducts(updated);
    localStorage.setItem("products",JSON.stringify(updated));
  };

  // ✅ ADD TO CART (USER)
  const addToCart = (product)=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Added to cart");
  };

  return(
    <>
    <Header/>

    <div style={{marginTop:"120px"}}>

      {/* ADMIN ADD FORM */}
      {role==="admin" && (
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          <h2>Admin Panel</h2>

          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />

          <button onClick={addProduct}>
            Add Product
          </button>
        </div>
      )}

      <div className="products">

        {products.map(p=>(
          <div key={p.id} className="product">
            <img src={p.thumbnail} alt={p.title}/>
            <h3>{p.title}</h3>
            <p>₹{p.price}</p>

            {role==="admin" ? (
              <button onClick={()=>deleteProduct(p.id)}>
                Delete
              </button>
            ) : (
              <button onClick={()=>addToCart(p)}>
                Add to Cart
              </button>
            )}

          </div>
        ))}

      </div>

    </div>

    <Footer/>
    </>
  );
}

export default Products1;
