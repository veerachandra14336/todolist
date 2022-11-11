import React from 'react';
import "./Todo.css";
import { useState } from 'react';
import { List } from './List';



export function TodoForm(){
  const[currentItem,setcurrentItem] =useState(null);
  const[itemList,updateItemList]=useState([]);
 const onchangeHandler=e=>{
   setcurrentItem(e.target.value)
 }
  const addItemtoList =()=>{
    updateItemList([...itemList,{item:currentItem,key:Date.now()}])
    setcurrentItem("");
  }
  return (
    <div className='Todo'>
    <header className='veera'>  
      <div className='wrapper'>
        <div className='Input-Wra pper'>
          <input value={currentItem} onChange={onchangeHandler}/>
          <button onClick={addItemtoList}>+</button>
    </div>
    <List itemList={itemList} updateItemList={updateItemList}/>
    </div>
    </header>
    </div>
  )
}

export default TodoForm;
