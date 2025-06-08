import { useEffect,useState } from "react";

const useRestaurentmenu=(resId)=>{
    //fetch the data and return the restaurent
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurentmenu;