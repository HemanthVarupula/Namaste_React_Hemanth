import { Restaurentcard ,withPromoted} from "./RestaurentCard"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
//no longer needed as data comming from backend api
// import { resobj } from "../util/constants"
import { useState,useEffect } from "react";
// const ListofRestaurent=resobj;

export const Body=()=>{
 let [ListofRestaurent,setListofRestaurent]=useState([])
 let [filteredRes,setFilteredRes]=useState([]);
// console.log(ListofRestaurent)
useEffect(()=>{
    fetchdata();
 },[])
 const fetchdata=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json=await data.json();
    // console.log(json)
    const restaurantArray=(json?.data?.cards?.filter((card)=>{return card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"})) .map((card) => card?.card?.card?.info);
        //   console.log(restaurantArray)
    setListofRestaurent(restaurantArray||[])
    setFilteredRes(restaurantArray||[])
 }

 const [searchText,setSearchtext]=useState("")
 const RestaurantCardPromoted=withPromoted(Restaurentcard);

//  if(ListofRestaurent.length===0){
//     return <Shimmer/>
//  }
    return ListofRestaurent.length==0?<Shimmer/>:(
        <>
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}}></input>
            <button onClick={()=>{
             const filteredRestro=ListofRestaurent.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );setFilteredRes(filteredRestro);
       
                // filter((res)=>res.data.name.includes(searchText));
                // setListofRestaurent(filteredRes)
            }}>Search</button>
        </div>
            <div className="top-restro">
                <button className="btn" onClick={()=>{
                   setFilteredRes(ListofRestaurent.filter((i)=>{return i.avgRating>4.4}))
                //   console.log("button clicked")   
                }}>To Rated Restaurent</button>
            </div>
            <div className="res-container">
            {
                filteredRes.map((i)=>{
                   return  (<Link className="rmc" key={i.id}   to={"restaurent/"+i.id }>{i.promoted?(<RestaurantCardPromoted  resData={i}/>):<Restaurentcard  resData={i}/>}</Link>)
                })
            }
            </div>
        </>
    )
}