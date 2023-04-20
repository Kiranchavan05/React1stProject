
import React,{useState} from 'react';
import './App.css';
import Details from './component/Details';
import Display from './component/Display';

function App() {
  const [list,setList]=useState([])

  const itemHandler=order=>{
    setList([...list, order])
    localStorage.setItem(order.id, JSON.stringify(order))

  }

  const deleteHandler=orderid=>{
    const newOrderList=list.filter(ele=>ele.id!==orderid)
    setList([newOrderList])

  }
  return (
    <div>
    
      <Details onAdd={itemHandler}/>
      <Display Items={list} onDeleteOrder={deleteHandler}/>
    </div>
  );
}

export default App;
