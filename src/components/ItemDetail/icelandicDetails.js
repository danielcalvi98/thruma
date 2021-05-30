import React from 'react'
import { useParams } from 'react-router'
import { Data } from '../../views/Webstore'
import { Dropdown } from 'react-bootstrap';
import './style.css'
function ItemDetail() {
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
            <h2>Innihaldsupplýsingar</h2>
            <p>Í einum skammti: 4 stykki</p>
            <p> { item.description[0] } </p>
            <p>Í einu stykki sem er ¼ af skammti.</p>
            <p>Prótein: {item.protein}</p>
            <p>Fita: {item.fat}</p>
            <p>Kolvetni: {item.carbs}</p>
            <p>Kcal: {item.calories}</p>

        </div>
        </>
    )
}

export default ItemDetail
