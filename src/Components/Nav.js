import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navv">
      <div className="home-nav">
        <h2>PopCorn Movies</h2>
        <div className="social-icon">
          <Link to="https://www.facebook.com/david.oluwafemi.71465">
            <i className=" fab fa-facebook" aria-hidden="true" role="img"></i>
          </Link>
          <i className=" fab fa-instagram" aria-hidden="true" role="img"></i>
          <Link to="https://twitter.com/Oluwafemi166?s=08">
            <i className=" fab fa-twitter" aria-hidden="true" role="img"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
