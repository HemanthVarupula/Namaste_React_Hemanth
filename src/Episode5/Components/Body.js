import { Restaurentcard } from "./RestaurentCard"
import { resobj } from "../util/constants"
import { useState } from "react";
// const ListofRestaurent=resobj;

export const Body=()=>{
 let [ListofRestaurent,setListofRestaurent]=useState(resobj)
    return(
        <>
            <div className="top-restro">
                <button className="btn" onClick={()=>{
                   setListofRestaurent(ListofRestaurent.filter((i)=>{return i.avgRating>4.2}))
                    
                }}>To Rated Restaurent</button>
            </div>
            <div className="res-container">
            {
                ListofRestaurent.map((i)=>{
                   return  <Restaurentcard key={i.id} resData={i}/>
                })
            }
            </div>
        </>
    )
}