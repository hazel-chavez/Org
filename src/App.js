import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import CampoTexto from './componentes/campo'
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo'
import Footer from './componentes/Footer';

function App() {
 
  const [mostrarFormulario,actualizarFormulario] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([{
  id:uuid(),
  equipo:"Programacion",
  foto:"https://github.com/harlandlohora.png",
  nombre:"Harland Lohora",
  puesto:"instructor",
  fav: true
  },
  {
    id:uuid(),
    equipo:"Movil",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"JeanMarie",
      puesto:"instructora",
      fav: false
  },
  {
    id:uuid(),
      equipo:"Innovacion y Gestion",
      foto:"https://github.com/genesysaluralatam.png",
      nombre:"Geneysis Rondom",
      puesto:"instructora y Desarrolladora Front End",
      fav: true
  }])
//react reacciona al cambio todo lleva un orden
const [equipos,actualizarEquipos] = useState([
    //creamos un objeto de cada equipo con sus atributos y titulo
    {
      id:uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },

    {
      id:uuid(),
      titulo:"Desarrollador front end",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },

    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8 "
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {
      id:uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {
      id:uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },   
])

  //ternario ----> ? seMuestra : noseMuestra
  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  //registrar colaborador app padre
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador" , colaborador);
    //spread operator copia los datos del colborador y agrega uno nuevo
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //funcion eliminar
   const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }
//Actualizar color pasando por props 

const actualizarColor = (color, id) => {
  console.log("Actualizando color", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color //equipo primario en ese entonces va a cambiar al color actual
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}


//creando equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid() }]);
                                              //toma el nuevo equipo
}


const like = (id) => {
  console.log("like",id);
                                  //va hacer igual arreglo de colaboradores
  const colaboradoresActualizados = colaboradores.map((colaborador)=> {
   //fav es igual o tiene el mismo id haz esto
    if(colaborador.id === id){
                          //negar colaborador che
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
    actualizarColaboradores(colaboradoresActualizados)
}
 
  return (
    <div>
      {/* interpreta codigo javasxrifa-pull-left *}
        {Header()}
       { en codigo html }
        { <Header></Header> } 
        { componente  */}
        <Header />
        {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => 
             equipo.titulo )} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}  /> 
              : <div></div>
            
         
         } 
        {/* 2 forma {mostrarFormulario ? <Formulario /> : <></>} */}
        {/* 3 {mostrarFormulario && <Formulario />} */}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
         
         {
          //1 usamos nuestros arreglos
          //este parametro es la representacion de cada equipo
          equipos.map( (equipo) =>  
          <Equipo datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter (colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          //props =>                funcion
          like={like}
          /> 
          )
         }
       <Footer />
    </div>
   
  );
  
}

export default App;
