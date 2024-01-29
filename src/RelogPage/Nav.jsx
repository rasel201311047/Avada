import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
const Nav = () => {
    return (
        <div>
        <div  className=" d-flex align-items-center justify-content-center gap-2">
            <Link>
            <div className="h-100">
            {" "}
            <img src={logo} className="w-100 h-100" alt="" />{" "}
          </div>
          <div className="fs-2 fw-semibold">Avada</div>
          <div className="fs-2 fw-bold text-success">:</div>
            </Link>
        </div>
        </div>
    );
};

export default Nav;