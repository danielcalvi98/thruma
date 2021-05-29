import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Item({ item }) {
    function addToCart(item) {
        var cartItems = JSON.parse(localStorage.getItem('cart'))
        if(cartItems===null){
            cartItems = []
        };
        if(checkIfAdded(item)) return;
        item.quantity = 1;
        cartItems.push(item)
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    function checkIfAdded(item) {
        var cartItems = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < cartItems.length; i++) {
            const element = cartItems[i];
            if(element.id === item.id) {
                element.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cartItems))
                return true;
            }
        }
        return false
    }

    return (
        <>
        <div className="item-container" >
            <h1>{item.name}</h1>
            <Link to={"/bars/"+ item.id}>
                <img className="item-img" src={ item.img } alt="img" />
            </Link>
        </div>
        </>
    )
}

export default Item
