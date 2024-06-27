import "./index.css";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <a href="#">Electronics</a>
          <a href="#">Jewelery</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
        </div>

        <h1 className="company-name">BeSpoke Wardrobe</h1>
        <div className="icons">
          <IoIosSearch />
          <LuShoppingCart />
        </div>
        <div className="login">Login</div>
      </div>
    </>
  );
};
export default Navbar;
