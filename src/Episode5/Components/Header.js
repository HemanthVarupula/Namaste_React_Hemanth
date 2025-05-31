import { Logo_Url } from "../util/constants"

export  const Header=()=>{
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
                    </ul>
                </div>
            </div>
        </>
    )
}