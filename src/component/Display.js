import React from "react";


const Display= props=>{
    const deleteOrder=id=>{
        localStorage.removeItem(id)
        props.onDeleteOrder(id)
    }
    
    return(
        <div>
            <h1>Products</h1>
            <ul>
                <h2>Electronics Items</h2>  
            
                {props.Items.map((item)=>{
                    if(item.category==='Electronics Items'){
                        return (
                            <li key={item.id}>
                                {item.price}-{item.product}-{item.category}
                                <button type="button" onClick={()=>{deleteOrder(item.id)}}>Delete</button>
                            </li>
                        )
                    }
                })}
            </ul>
            <ul>
                <h2>Food Items</h2>
                {props.Items.map((item)=>{
                    if(item.category==='Food Items'){
                        return (
                            <li key={item.id}>
                                {item.price}-{item.product}-{item.category}
                                <button type="button" onClick={()=>{deleteOrder(item.id)}}>Delete</button>
                                
                            </li>
                        )
                    }
                })}
            </ul>
            <ul>
                <h2>SkinCare Items</h2>
                {props.Items.map((item)=>{
                    if(item.category==='SkinCare Items'){
                        return (
                            <li key={item.id}>
                                {item.price}-{item.product}-{item.category}
                                <button type="button" onClick={()=>{deleteOrder(item.id)}}>Delete</button>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
export default Display;
