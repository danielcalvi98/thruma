import { Dropdown } from 'react-bootstrap';
import React from 'react'

function english() {
    return (
        <div className="about-container" >
            <Dropdown>
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                        Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href= {"/about/is"} >Icelandic</Dropdown.Item>
                        <Dropdown.Item href= {"/about/en"}>English</Dropdown.Item>
                        <Dropdown.Item href= {"/about/da"}>Danish</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <h1>About us</h1>
            <p>
            Our protein bars support World Goal No. 3; Health and well-being. With this goal, it is assumed that everyone on earth is in good health and that everyone feels good every day. Our protein bars help people reach the recommended dose of various nutrients such as protein, fat and carbohydrates. Our bars are nutritious and taste good along the way which can support good well-being. Nutrition is very important for both athletes and also just ordinary citizens who are not necessarily into sports. Many studies have shown that good nutrition can increase the quality of life and is important for young children especially for their body to mature and so on. Adolescents today often have mental and physical problems, and malnutrition and poor physical activity can be a problem. In Iceland, where it is dark most of the day half of the year, it is important to have a good diet and exercise at least a little every day so that you will not develop any mental problems such as depression or anxiety. However, nutrition has not always been so good both in this country and abroad. In the past, it was very common for fishermen in this country to get scurvy, which is a disease that you can get when you are not getting the full nutritional dose and you lack freshness that you can get, for example, from fruits and vegetables. Nowadays, this so-called disease is actually extinct today and no one seems to get this disease nowadays. Just as in this country, nutrition was very poor, for example in the Middle Ages in Europe, and the main food of ordinary citizens was just potatoes. Once upon a time there was a kind of disease in potato growing and it was not possible to eat them and as a result many people died of starvation. It is good to see how much mankind has evolved since then and nutrition is now much better and more diverse than before.

            </p>
        </div>
    )
}

export default english
