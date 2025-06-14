import {  useDispatch } from "react-redux"
import { Cdn_Url } from "../util/constants"
import { addItem } from "../util/cartSlice";

export const ItemList=({items})=>{
    // console.log(items)
const dispatch=useDispatch();
const handleAddItem=(item)=>{
    //dispatch an action 
    dispatch(addItem(item))
}
    return (
        <>
        <div>
            {Array.isArray(items) &&items.map((i)=>{ return (
                <div key={i.card.info.id} className="item">
                <div className="acccontents">
                    <div>
                    <img src={Cdn_Url+i.card.info.imageId} className="itemimg"></img> 
                    <div className="dadd"><button className="addbtn" onClick={ ()=>{  handleAddItem(i); }}>Add +</button></div><br></br>
                    <br></br>
                        <span>{i.card.info.name}</span>
                    <span>💰{i.card.info.price?i.card.info.price/100:i.card.info.defaultprice/100}</span>
                    </div>
                </div>
                <p>{i.card.info.description}</p>
            </div>)
            })}
        </div>
        </>
    )
}

