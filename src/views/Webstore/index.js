import React, { useState } from 'react'
import Item from '../../components/Item'
import './style.css'

export const Data = [
    {
        id: 1,
        name: 'Bar',
        description: 'Protein bar with caramel.',
        img: 'https://barebells.com/wp-content/uploads/2020/04/EXP_BB_Vegan_Proteinbar_SaltyPeanut_S2_web-327x800.png'
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
