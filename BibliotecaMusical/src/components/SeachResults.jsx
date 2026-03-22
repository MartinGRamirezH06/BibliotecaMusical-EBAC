import Song from "./Song";

const SeachResults=(props)=>{
    //Recibe la lista de canciones completas
    const {searchResults, onClick}=props
    if (!searchResults||searchResults.length===0) return null;
    return(
        <>
            <section className="main__results">
                {/* Hace la busqueda con Map de la lista que recibio como props */}
                {searchResults.map(result=>{
                    return(
                        <div className="result-item" key={result.id}>
                            <Song
                                titulo={result.titulo}
                                autor={result.autor}
                                duracion={result.duracion}
                            >
                            <button
                                className="add-Library-btn"
                                type="button"
                                onClick={()=>{onClick(result)}}                            
                                >Agregar a mi biblioteca
                            </button>
                            </Song>

                        </div>
                    )
                })}
            </section>
        </>
    )


}
export default SeachResults;