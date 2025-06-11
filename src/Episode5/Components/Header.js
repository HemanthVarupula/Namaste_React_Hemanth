import { Logo_Url } from "../util/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useStatus from "../util/useStatus"
import { UserContext } from "./UserContext"
export  const Header=()=>{
    const [Login,setLogin]=useState("Login")
    const status=useStatus();
    function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const {loggedInuser}=useContext(UserContext)
console.log(loggedInuser)
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
                        <li>{status ? "✅Online" : "❌Offline"}</li>
                        <li><Link to={"/greet"}>Greet</Link></li>
                        <li><button className="darkmode" onClick={()=>{
                            myFunction()
                        }}>Dark Mode</button></li>
                        <li>{loggedInuser}</li>
                    </ul>
                </div>
                
            </div>

        </>
    )
}