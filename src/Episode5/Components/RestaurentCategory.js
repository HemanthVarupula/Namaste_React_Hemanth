
import { ItemList } from "./ItemList"
export const RestaurentCategory = ({data,showItems,setShowIndex}) => {
    // console.log(data)
    const handleClick=()=>{
      setShowIndex();
    }
  return (
    <> 
    <div className="acbody">
      <div className="acbox" onClick={handleClick} >
       <div className="acheader">
          <span>{data.title}{data.title.length}</span>
         <span>⬇️</span>
       </div>
       <div className="itemlist">{showItems&&<ItemList items={data.itemCards}/>}</div>
      </div>
        
    </div>
  
    </>
  )
}