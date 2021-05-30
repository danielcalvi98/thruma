import React from 'react'
import { useParams } from 'react-router'
import { Data } from '../../views/Webstore'
import { Dropdown } from 'react-bootstrap';
import './style.css'
function ItemDetail2() {
    const item = Data[useParams().id - 1]
    return (
        <>
        
        <div className="detail-container" >
        
            <h1> {item.name} </h1>
            <img src={ item.img } alt="img" />
            <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
                Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href= {"/bars/is/" + item.id} >Icelandic</Dropdown.Item>
                <Dropdown.Item href= {"/bars/en/" + item.id}>English</Dropdown.Item>
                <Dropdown.Item href= {"/bars/da/" + item.id}>Danish</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            <h2>Content information</h2>
            <p>In one batch: 4 bars</p>
            <p> { item.description[1] } </p>
            <p>In one bar, which is ¼ of a batch:</p>
            <p>Protein: {item.protein}</p>
            <p>Fat: {item.fat}</p>
            <p>Carbs: {item.carbs}</p>
            <p>Kcal: {item.calories}</p>

        </div>
        </>
    )
}

export default ItemDetail2