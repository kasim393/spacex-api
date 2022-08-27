import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0261/2615/5855/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png"
            alt=""
          />
        </Link>
      </div>
      <div className="right-navbar">
        <p>Mission</p>
        <p>About Us</p>
        <p>Shop</p>
      </div>
    </div>
  );
};
export default Navbar;
