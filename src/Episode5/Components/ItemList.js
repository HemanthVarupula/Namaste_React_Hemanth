import { Cdn_Url } from "../util/constants"

export const ItemList=({items})=>{
    console.log(items)
    return (
        <>
        <div>
            {items.map((i)=>{ return (
                <div key={i.card.info.id} className="item">
                <div className="acccontents">
                    <div>
                    <img src={Cdn_Url+i.card.info.imageId} className="itemimg"></img> 
                    <div className="dadd"><button className="addbtn">Add +</button></div><br></br>
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