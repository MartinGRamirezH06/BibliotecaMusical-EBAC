import Song from "./Song";

const Library=(props)=>{
    const {library,isOpen}=props
    if(library.length==0){
        return(
            <article className="library_container">
                <h2 className="library_container__title">Biblioteca</h2>
            </article>
        )
    }
    
    return(
        <>
            <article className={`library_container ${isOpen ? 'open' : 'closed'}`}>
                <section className="library_container__title">
                    <h2>Biblioteca</h2>
                </section>
                <section className="library_container__items">
                    {library.map((songs,index)=>{
                    return(
                        <Song
                            key={index} 
                            titulo={songs.titulo}
                            autor={songs.autor}
                            duracion={songs.duracion}
                        ></Song>
                    )
                })}
                </section>
            </article>
        </>
    )
}
export default Library;