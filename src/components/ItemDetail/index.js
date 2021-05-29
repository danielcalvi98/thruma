import React from 'react'
import { useParams } from 'react-router'
import { Data } from '../../views/Webstore'
import './style.css'
function ItemDetail() {
    const item = Data[useParams().id - 1]
    return (
        <div className="detail-container" >
            <h1> {item.name} </h1>
            <img src={ item.img } alt="img" />
            <h2>Innihaldsupplýsingar</h2>
            <p> { item.description } </p>
            <p>Protein: {item.protein}</p>
            <p>Fat: {item.fat}</p>
            <p>Carbs: {item.carbs}</p>
            <p>Kcal: {item.calories}</p>

        </div>
    )
}

export default ItemDetail
