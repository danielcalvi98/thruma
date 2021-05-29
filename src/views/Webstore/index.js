import React, { useState } from 'react'
import Item from '../../components/Item'
import './style.css'

export const Data = [
    {
        id: 1,
        name: 'Bar',
        description: "Ein skeið af whey protein : 14 gr prótein, 3 gr fita, 48 gr kolvetni, 275 kaloríur.\
        2 ½ dl hafrar: 12,5 gr prótein, 6,2gr fita, 70gr kolvetni, 350 kaloríur.\
        ¼ dl sýróp: 0 gr prótein, 0gr fita, 22gr kolvetni, 88 kaloríur.\
        Msk nutella: 5 gr prótein, 19 gr fita, 50 gr kolvetni, 200 kaloríur.\
        Msk af hnetusmjöri: 4 gr prótein, 8 gr fita, 3gr kolvetni, 94 kaloríur\
        4 msk af mjólk: 2 gr prótein, 1 gr fita, 3 gr kolvetni, 26 kaloríur\
        Sma salt : 0 gr prótein, 0 gr fita, 0 gr kolvetni, 0 kaloríur. \
         1 tsk Vanilludropar: 0 gr protein, 0 gr fita, 0 gr kolvetni, 0 kaloriur",
        img: '/images/turd.jpg',
        protein: "10g",
        fat: "9g",
        carbs: "49g",
        calories: "326"
    },
    {
        id: 2,
        name: 'Bar',
        description: 'Protein bar with choco flavor.',
        img: 'https://barebells.com/wp-content/uploads/2020/04/EXP_BB_Vegan_Proteinbar_HazelnutNougat_S2_web-327x800.png'
    },
    {
        id: 3,
        name: 'Bar',
        description: 'Protein bar with vanilla flavor.',
        img: 'https://barebells.com/wp-content/uploads/2017/12/EXP_BB_Proteinbar_CookiesCream_S2_web-3-327x800.png'
    },
   
]

function Webstore() {
    
    const [store, setStore] = useState(Data)
    return (
        <div className="store-container">
            {Object.values(store.map(item => 
                <Item item={ item } />
                ))}   
        </div>
    )
}

export default Webstore
