import { Link, useNavigate } from "react-router-dom";

function Header(){

  const navigate = useNavigate();
  const name = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return(
    <header>
      <h1>🛒 KL University Shop</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>

        {/* Cart only for USER */}
        {role === "user" && (
          <Link to="/cart">Cart</Link>
        )}

        {name && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>

      <div id="user-display">
        {name ? `Welcome, ${name}` : ""}
      </div>
    </header>
  )
}

export default Header;
