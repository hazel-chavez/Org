import "./ListaOpciones.css"

/**
 * The function creates a dropdown list of options with a title and allows the user to select an
 * option, which triggers a callback function to update the selected value.
 * @param props - props is an object that contains the properties passed to the component. These
 * properties can be accessed using dot notation, for example, props.titulo or props.valor. In this
 * specific component, props contains the following properties: titulo, valor, equipo, and
 * actualizarEquipo.
 * @returns A functional component called "ListaOpciones" is being returned. It renders a div
 * containing a label and a select element with options generated using the map method. The selected
 * value of the select element is controlled by the "valor" prop and the onChange event is handled by
 * the "manejarEquipo" function. The component also receives props such as "titulo" and "equipo" which
 */
const ListaOpciones = (props) => {

    // metodo map -> arreglo.map ( (equipo, index(es la posicion)) => {
      //  return <option></option>
// })
   
    const manejarEquipo = (e) => {
      console.log("cambio", e.target.value)
      props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>{props.titulo}</label>
        <select value={props.valor} onChange={manejarEquipo}>
          <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
          { props.equipo.map( (equipo, index) => <option key="{index}" value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones