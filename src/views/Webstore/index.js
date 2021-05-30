import React, { useState } from 'react'
import Item from '../../components/Item'
import './style.css'

export const Data = [
    {
        id: 1,
        name: 'Þruma',
        description: ["Ein skeið af whey protein : 14 gr prótein, 3 gr fita, 48 gr kolvetni, 275 kaloríur.\n\
        2 ½ dl hafrar: 12,5 gr prótein, 6,2gr fita, 70gr kolvetni, 350 kaloríur.\n\
        ¼ dl sýróp: 0 gr prótein, 0gr fita, 22gr kolvetni, 88 kaloríur.\n\
        Msk nutella: 5 gr prótein, 19 gr fita, 50 gr kolvetni, 200 kaloríur.\n\
        Msk af hnetusmjöri: 4 gr prótein, 8 gr fita, 3gr kolvetni, 94 kaloríur\n\
        4 msk af mjólk: 2 gr prótein, 1 gr fita, 3 gr kolvetni, 26 kaloríur\
        Sma salt : 0 gr prótein, 0 gr fita, 0 gr kolvetni, 0 kaloríur. \
         1 tsk Vanilludropar: 0 gr protein, 0 gr fita, 0 gr kolvetni, 0 kaloriur",
        
         "One scoop of whey protein: 14g protein, 3g fat, 48g carbs,275 calories\
        2 ½ dl oats:12,5g protein, 6.2g fat, 70g carbs, 350 calories\
        ¼ dl syrup: 0g protein, 19g fat, 50g carbs, 88 calories\
        Table spoon of nutella: 5g protein, 19g fat, 50g carbs, 200 calories\
        Table spoon of peanut butter:4g protein, 8g fat, 3g carbs, 94 calories\
        4 table spoons of milk: 2g protein, 1g fat, 3g, 26 calories\
        Salt: 0 g of all\
        1 teaspoon vanilladrops: 0 g of all",
        
        "En ske af Whey protein: 14 gr protein, 3 gr fed, 48 gr kulhydrater, 275 kalorier.\
        2 ½ dl havregryn: 12,5 gr protein, 6,2 gr fed, 70 gr kulhydrater, 350 kalorier.\
        ¼ dl sirup: 0 gr protein, 0 gr fed, 22 gr kulhydrater, 88 kalorier.\
        En spiseskefuld af nutella: 5 gr protein, 19 gr fed, 50 gram kulhydrater, 200 kalorier\
        En spiseskefuld af jørdnøddesmør: 4 gr protein, 8 gr fita, 3 gr kulhydrater, 94 kalorier.\
        4 spiseskefulder af af mælk: 2 gr protein, 1 gr fed, 3 gr kulhydrater, 26 kalorier.\
        Lille salt: 0 gr protein, 0 gr fed, 0 gr kulhydrater, 0 kalorier\
        1 teskefuld af Vaniljedraber: 0 gr protein, 0 gr fed, 0 gr kulhydrater, 0 kalorier"



        ],
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
