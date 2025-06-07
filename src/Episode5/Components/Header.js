import { Logo_Url } from "../util/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
export  const Header=()=>{
    const [Login,setLogin]=useState("Login")
    return(
        <>
            <div className="header">
                <div className="logo"><img className ="logo1" src={Logo_Url}/></div>
                <div className="nav-items">
                    <ul className="item">
                        <li><Link to={"/"}>Home</Link></li>
                        <li ><Link to={"/about"}>About Us</Link></li>
                        {/* Total Page will render if u use a tag */}
                        {/* <li><a href="/about">About us</a></li> */}
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li>Cart</li>
                        <li>
                            <button className="logbtn" onClick={
                                ()=>{
                                    setLogin(Login=="Login"?"Logout":"Login")
                                }
                            }>
                            {Login}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}