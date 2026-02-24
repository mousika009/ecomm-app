import mobile from "../images/mobile.jpg"
import laptop from "../images/laptop.jpg"
import earbuds from "../images/earbuds.jpg"
import Header from "./Header"
import Footer from "./Footer"
import "../components/styles.css"
import { useNavigate } from "react-router-dom"
function Products(){
    const navigate = useNavigate();
    const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if(isLoggedIn=="true"){
            navigate("/cart");
        }
        else{
            alert("Please login first!");
            navigate("/login");
        }
    };
    return(
        <>
          <Header/>
          <div className="products">
            <div className="product">
                <img src={mobile} alt="product1"/>
                <h3>Product 1</h3>
                <p>Rs.50,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div className="product">
                <img src={laptop} alt="product2"/>
                <h3>Product 2</h3>
                <p>Rs.80,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div className="product">
                <img src={earbuds} alt="product3"/>
                <h3>Product 3</h3>
                <p>Rs.5,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
             <div className="product">
                <img src={mobile} alt="product1"/>
                <h3>Product 4</h3>
                <p>Rs.50,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div className="product">
                <img src={laptop} alt="product2"/>
                <h3>Product 5</h3>
                <p>Rs.80,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
             <div className="product">
                <img src={earbuds} alt="product3"/>
                <h3>Product 6</h3>
                <p>Rs.5,000</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
            <Footer/>
        </>
    )
}
export default Products