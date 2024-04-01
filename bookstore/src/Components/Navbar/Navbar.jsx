import React from "react";
import "./Navbar.css";
import download from "../Assets/download.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/admin'>Admin Panel</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/admin'>Admin Panel</Link>
      </nav>
      <div className="nav--top">
        <div className="nav-top-left">
          <img src={download} alt="" className="logo" />
          <h2 className="logo">Pen And Paper</h2>
        </div>
        <div className="nav--top-right">
          <button>Login</button>
          <button>Sign Up</button>
          <LuShoppingCart className="cart" />
          <FaUserCircle className="user" />
        </div>
      </div>
      <div className="nav--mid">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/books'>Books</Link></li>
          <li><Link to='/contact'></Link>contact</li>
          <li><Link to='/admin'></Link>Admin Panel</li>
          <div className="input-form">
            <FaSearch className="search" />
            <input type="text" placeholder="Find your articles" />
          </div>
        </ul>

        <ul>
          <li><Link to='/help'></Link>Help</li>
          <li><Link to='/country-selector'></Link>Find Your Country</li>
        </ul>
      </div>
      <div className="nav--bottom">
        <div className="text">
          <h2>Welcome To Pen And Paper</h2>
          <h4>The best selling online bookstore in EAC</h4>
          <p>East Africa Community Bookstore</p>
          <div>Open for Every Country in the EAC</div>
        </div>
        <div className="text2">
          <p>Recomendations:</p>
          <p className="frenq">Africa Woman</p>
          <p className="frenq">Betrayal In The City</p>
          <p className="frenq"> A Cowrie Of Hope </p>
          <p className="frenq"> Alien Woman </p>
        </div>
      </div>
    </div>
 );
}

export default Navbar;
