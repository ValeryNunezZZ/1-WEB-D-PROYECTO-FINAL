function Pais({bandera, nombre, poblacion, region, capital, handleSeleccionarPais, darkMode}){

    return(
        <>
            <div onClick={()=>{handleSeleccionarPais(nombre)}} className={`container-pais ${darkMode?'dark':''}`}>
                <div className="bandera-container">
                    <img src={bandera}></img>
                </div>

                <div className="info-container">
                    <h3>{nombre}</h3>
                    <span className="titles"><span>Population: </span>{poblacion}</span>
                    <span className="titles"><span>Region: </span>{region}</span>
                    <span className="titles"><span>Capital: </span>{capital}</span>
                </div>
            </div>
        </>
    );
}

export default Pais