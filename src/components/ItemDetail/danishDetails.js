import React from 'react'
import { useParams } from 'react-router'
import { Data } from '../../views/Webstore'
import { Dropdown } from 'react-bootstrap';
import './style.css'
function ItemDetail3() {
    const item = Data[useParams().id - 1]
    return (
        <>
        
        <div className="detail-container" >
            <h1> {item.name} </h1>
            <img src={ item.img } alt="img" />
                <Dropdown>
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                        Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href= {"/bars/is/" + item.id} >Icelandic</Dropdown.Item>
                        <Dropdown.Item href= {"/bars/en/" + item.id}>English</Dropdown.Item>
                        <Dropdown.Item href= {"/bars/da/" + item.id}>Danish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <h2>Indholdsinformation</h2>
            <p>I en dosis: 4 stykke</p>
            <p> { item.description[2] } </p>
            <p>I et stykke, som er ¼ af dosis er:</p>
            <p>Protein: {item.protein}</p>
            <p>Fed: {item.fat}</p>
            <p>kulhydrater: {item.carbs}</p>
            <p>Kcal: {item.calories}</p>

        </div>
        </>
    )
}

export default ItemDetail3