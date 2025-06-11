// import { resobj } from "../util/constants";
import { Cdn_Url } from "../util/constants";
export const Restaurentcard=(props)=>{
    const {resData}=props;
    //Destructure on the fly
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData;
    // console.log(props)
    return (
        <>
           <div className="res-card">
             <img className="res-img" src={ Cdn_Url+cloudinaryImageId}/>
             <h2>{name}</h2>
             <h3 style={{fontStyle:"italic"}}>{cuisines.join(",")}</h3>
             <h3>{avgRating}</h3>
             <h4>{sla.deliveryTime} minutes</h4>
           </div>
        </>
    )
}

//higher order component 
//input->Restaurentcard =>promoted RestaurentCard promoted

export const withPromoted=(RestaurentCard)=>{
  return (props)=>{
    return (
      <>
        <label className="promoted">Promoted</label>
        <RestaurentCard {...props}/>
      </>
    )
  }
}