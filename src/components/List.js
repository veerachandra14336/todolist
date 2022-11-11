import './List.css'; 

export function List({itemList,updateItemList}){
    const deleteitemfromList =key=>{
   const newList= itemList.filter((itemObj)=>{
         return itemObj.key !== key;
     });
     updateItemList(newList);
    }
    
    return(
       <div>
        {itemList.map(itemObj=>{
          return (
            <div key={itemObj.key}className="Item">
                <p>{itemObj.item}</p>
                <button onClick={()=>deleteitemfromList(itemObj.key)}>x</button>
          </div>
          );
        })}
       </div>
    );
} 
