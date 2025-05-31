import { Logo_Url } from "../util/constants"
import { useState } from "react"
export  const Header=()=>{
    const [Login,setLogin]=useState("Login")
    return(
        <>
            <div className="header">
                <div className="logo"><img className ="logo1" src={Logo_Url}/></div>
                <div className="nav-items">
                    <ul className="item">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
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