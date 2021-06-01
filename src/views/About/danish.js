import { Dropdown } from 'react-bootstrap';
import React from 'react'

function danish() {
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
        <h1>Om os</h1>
        <p>
            Vores proteinstykker understøtter verdensmål nr. 3; Sundhed og velvære. Med dette mål antages det, at alle på jorden har et godt helbred, og at alle har det godt hver dag. Vores proteinstænger hjælper folk med at nå den anbefalede dosis af forskellige næringsstoffer som protein, fedt og kulhydrater. Vores stykker er nærende og smager godt undervejs, hvilket kan understøtte godt velvære. Ernæring er meget vigtig for både atleter og også bare almindelige borgere, der ikke nødvendigvis er interesseret i sport. Mange undersøgelser har vist, at god ernæring kan øge livskvaliteten og er vigtig for små børn, især for at deres krop modnes og så videre. Unge i dag har ofte mentale og fysiske problemer, og jeg tror, ​​at underernæring og dårlig fysisk aktivitet kan være et problem. I Island, hvor det er mørkt det meste af dagen halvdelen af ​​året, er det vigtigt at have en god diæt og træne mindst en lille smule motion hver dag, så det ikke har mentale problemer som depression eller angst. Ernæring har dog ikke altid været så god både i dette land og i udlandet. Tidligere var det meget almindeligt for fiskere i dette land at få skørbug, hvilket er en sygdom, som du kan få, når du ikke får den fulde ernæringsdosis, og du mangler friskhed, som du f.eks. kan få fra frugt og grøntsager . I dag er denne såkaldte sygdom faktisk uddød og ingen ser ud til at få denne sygdom i dag. Ligesom i dette land var ernæringen meget dårlig, for eksempel i middelalderen i Europa, og almindelige borgeres hovedføde var bare kartofler. Engang var en slags kartoffel inficeret og kunne ikke spises, så mange mennesker døde af sult. Det er godt at se, hvor meget menneskeheden har udviklet sig siden da, og ernæring er nu meget bedre og mere forskelligartet end før
  
        </p>
    </div>
    )
}

export default danish
