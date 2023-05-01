import "./Equipo.css";
import Colaboradores from "../Colaboradores";
import hexToRgba from "hex-to-rgba";
const Equipo = (props) => {
  //desestucturacion
  const { colorPrimario, colorSecundario, titulo,id } = props.datos;
  const { colaboradores, eliminarColaborador,actualizarColor, like } = props;
  const estiloTitulo = { borderColor: colorPrimario };

  

  const obj = {
    backgroundColor: hexToRgba(colorPrimario,0.6)
  };
  return (
    <>
      {" "}
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input 
          
          type='color'   className="input-color"
          
           value={colorPrimario} onChange={ (evento) => {
              actualizarColor(evento.target.value,id)
           }}>
            
           </input>
          <h3 style={estiloTitulo}> {titulo}</h3>
          <div className="colaboradores">
            {/* //objecto recibe por cada colaborador */}
            {
              //key index valor unico no elimina todos colaboradpr
              //por cada arreglo de colaborades agrega un nuevo colaborador
              colaboradores.map((colaborador, index) => (
                <Colaboradores 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />
              ))
            }
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
