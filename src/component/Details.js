import React, {useState}from "react";
import Card from "../UI/Card";

const Details=props=>{
    const [idNumber,setIdNumber]=useState('')
    const [sellingPrice,setSellingPrice]=useState('');
    const [productName,setProductName]=useState('');
    const [pCategory,setPCategory]=useState('');


    const idHandler=(event)=>{
        setIdNumber(event.target.value)
        
    }

    const priceHandler=(event)=>{
        setSellingPrice(event.target.value)
    }
    const ProductHandler=event=>{
        setProductName(event.target.value)
    }

    const categoryHandler=event=>{
        setPCategory(event.target.value)
    }

    const submitHandler=event=>{
        event.preventDefault()

        const order={
            id:idNumber,
            price:sellingPrice,
            product:productName,
            category:pCategory
        }
        props.onAdd(order);
    }

    return (
        <React.Fragment>
            <Card>
            <form onSubmit={submitHandler}>
                <label>Product ID:</label>
                <input type="number" onChange={idHandler}></input>

                <label>Selling Price:</label>
                <input type="number" onChange={priceHandler}></input>

                <label>Product Name</label>
                <input type="text" onChange={ProductHandler}></input>

                <label htmlFor="category">Choose a Category</label>
                <select id="category" onChange={categoryHandler}>
                    <option>select</option>
                    <option>Electronics Items</option>
                    <option>Food Items</option>
                    <option>SkinCare Items</option>
                </select>
                <button type="submit">Add Product</button>
            </form>
            </Card>
        </React.Fragment>
    )
        
    

}
export default Details;
