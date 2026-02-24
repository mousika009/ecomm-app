import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products1 from "./components/Products1";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import "./components/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products1/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
