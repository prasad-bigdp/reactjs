import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar= () =>{

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <Link
            to="/"
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            Pokedex
          </Link>
        </nav>
      </div>
    );
  
}
export default NavBar