import React from 'react'
import Search from '../Search/Search'
import "../../style-components/Nav/style.css"
import { Link, useNavigate } from "react-router-dom";

const Nav = ({onChangeSearch}) => {
	let navigate = useNavigate();

  return (
        <ul className="menu-bar">
            <div className="li-menu">
                <Link to="/home"> <li>Home</li> </Link>
                <li onClick={()=>{
                  window.localStorage.clear();
                  navigate("/", { replace: true });
                }}>Sign Off</li>
            </div>
            <Search onChangeSearch={onChangeSearch}/>
        </ul>
  )
}

export default Nav