import { useState } from "react"
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones/index"
import Boton from "../Boton/"
import Campo from "../campo"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarpuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("")
    //estados de los componentes del formulario
    const [titulo,actualizarTitulo]= useState("");
    const [color,actualizarColor]= useState("");
    //   objecto
    const { registrarColaborador,crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio : ")
        let datosEnviados = {
            nombre,
            puesto,
            foto,
            equipo,
            // id: 0
        }
        // console.log(datosEnviados)
        registrarColaborador(datosEnviados)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo,colorPrimario: color})//lo llamamos como si fuera un objecto

    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre"
             placeholder="Ingresa el nombre" 
             required
             valor={nombre}
             actualizarValor={actualizarNombre}
             />
            <Campo titulo="Puesto"
             placeholder="Ingresa el puesto" 
             required
             valor={puesto}
             actualizarValor={actualizarpuesto}
             />
            <Campo titulo="Foto" 
            placeholder="Ingresa el enlace de la foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones  valor={equipo} actualizarEquipo={actualizarEquipo} equipo = {props.equipos}/>
            
            <Boton>
                Crear
            </Boton>
        </form>
         <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo"
             placeholder="Ingresa el titulo" 
             required
             valor={titulo}
             actualizarValor={actualizarTitulo}
             />
            <Campo titulo="Color"
             placeholder="Ingresa el Color" 
             required
             valor={color}
             actualizarValor={actualizarColor}
             type="color"
       />
       <Boton>Registrar un nuevo equipo </Boton>
    </form>
        
</section>
}

export default Formulario