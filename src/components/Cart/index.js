import React, { useEffect, useState } from 'react'
import './style.css'
function Cart() {
    const [items, setItems] = useState([]);
    if(items === [])
    {localStorage.setItem('cart',JSON.stringify(items))}
    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('cart')))    
    })

    function clearCart() {

    }

    function removeItem(index) {
        var temp = items;
        temp.splice(index, 1)
        setItems(temp)
        localStorage.setItem('cart',JSON.stringify(items))
    }

    function increaseQuantity(index, item) {
        var temp = items;
        item.quantity += 1;
        temp[index] = item
        setItems(temp)
        localStorage.setItem('cart',JSON.stringify(items))
    }

    function decreaseQuantity(index, item) {
        var temp = items;
        if(item.quantity === 1) return;
        item.quantity -= 1;
        temp[index] = item
        setItems(temp)
        localStorage.setItem('cart',JSON.stringify(items))
    }

    return (
        <>
                <div className="cart-container" >
                <h1>Cart</h1>
                { items &&
                Object.values(items.map((item, index) =>
                    <>
                        <p className="item-name" >{item.name}</p>
                        <div className="quantity" >
                            <div className="quantity-center" onClick={ () => decreaseQuantity(index, item) } ><i class="fas fa-minus" /></div>
                            <div className="quantity-center" ><i>{item.quantity }</i></div>
                            <div className="quantity-center" onClick={ () => increaseQuantity(index, item) } ><i class="fas fa-plus" /></div>
                            
                        </div>
                        <img className="item-img" src={item.img} alt="img" />
                        <i class="fas fa-trash-alt" onClick={ () => removeItem(index) } ></i>
                    </>
                    )) }
                {/* <button className="btn btn-primary" >Checkout</button> */}
            </div>
        </>
    )
}
export default Cart
