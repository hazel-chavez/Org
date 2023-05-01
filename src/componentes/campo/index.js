import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    const [valor,actualizarValor] = useState("")

    //desestructuracion le damos un valor
    const { type = "text" } = props
  
    

    const manejarCambio = (e) => {
        e.preventDefault()
        props.actualizarValor(e.target.value)
    }
    console.log("Datos: ", props);
    const placeholderModificador = `${props.placeholder}..`
    return <div className={`campo campo-${type}`}>
     <label>{props.titulo}</label>
     <input 
     placeholder={placeholderModificador} 
     required={props.required}
     value={props.valor}
     onChange={manejarCambio}
     type={type}
     />
    </div>
}

export default Campo