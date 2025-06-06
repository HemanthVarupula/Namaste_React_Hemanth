import { useEffect,useState } from "react"
import { Shimmer } from "./Shimmer"
import { Cdn_Url } from "../util/constants"
import { useParams } from "react-router-dom"
export const Restaurentamenu=()=>{
    const [resInfo,setResInfo]=useState(null)
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu =async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data)
        console.log(json)
    };
    
    const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[2]?.card?.card.info||{};
    const menuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categoryCard = menuCards.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const itemCards = categoryCard?.card?.card?.itemCards || [];
    // const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"||{};
    console.log(itemCards)
    return resInfo==null?<Shimmer/>:(
        <>
            <img className="restromenuimg" src={Cdn_Url+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>menu</h2>
            <ul>
                <li style={{listStyleType:"none",fontSize:"2rem"}}>{cuisines.join(",")}</li>
                
            </ul>
            <ul>
  {itemCards.map((i) => (
    <li key={i.card.info.id}>
      {i.card.info.name} - ₹{i.card.info.price / 100}
    </li>
  ))}
</ul>
        </>
    )
}