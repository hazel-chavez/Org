import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //hooks estado funcionalidades 
    //useState
    //use State()

    //const [nombreVariable,funcionActualiza] = useState("valorInicial")
     
    //  const [mostrar, actualizaNombre] = useState(true)
    //podemos tener la cantidad de estados que querramos
    // const manejarClick = () => {
    //   console.log("Maneja el click", !mostrar)
    //   actualizaNombre(!mostrar)//por cada click va a cambiar de estado
    // }
    return  <section className="orgSection">
        <h3 className="title">Mi Organizacion </h3>
        <img src="/img/add.png" alt="miOrg" onClick={props.cambiarMostrar}></img>
    </section>
    
}

export default MiOrg