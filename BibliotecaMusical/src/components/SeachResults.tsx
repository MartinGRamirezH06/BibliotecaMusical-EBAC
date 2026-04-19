import Album, { AlbumProps } from "./Album";
import Song, {SongProps} from "./Song";
import { Link } from "react-router-dom";

type SearchItem= AlbumProps | SongProps;
export interface ResultsProps{
    searchResults:SearchItem[] | null;
    onClick:(item: SearchItem) => void;
    loading:boolean;
    error:string | null;
} 

const SeachResults=({searchResults, onClick, loading,error}:ResultsProps)=>{
    
    if(loading){
        return (<section className="main__results"><p>Cargando...</p></section>)
    }
    if(error){
        return (
        <section className="main__results">
            <h3>{error}</h3>
            <p>Intenta buscar otra ancion o artista o verifica tu conexion.</p>
        </section>);
    }
    if(!searchResults){
        return null;
    }
    if(searchResults.length===0){
        return(
            <section className="main__results"> 
                <h3>No se encontraron albunes</h3> 
            </section>);
    }

    return(
        <>
            <section className="main__results">
                {/* Hace la busqueda con Map de la lista que recibio como props */}
                
                {searchResults.map((result) => {
                    const isAlbum = !("idTrack" in result);
                    return(
                        <div className="result-item" key={isAlbum ? result.idAlbum : result.idTrack}>
                            {isAlbum ? (
                                <Album 
                                    idAlbum={result.idAlbum}
                                    strAlbumThumb={result.strAlbumThumb}
                                    strAlbum={result.strAlbum}
                                    strArtist={result.strArtist}
                                    intYearReleased={result.intYearReleased}
                                >
                                    <button
                                        className="details-btn"
                                        type="button"
                                        onClick={ () => {
                                        onClick(result)
                                    }}                            
                                    >Agregar a mi biblioteca
                                    </button>
                                </Album>
                            ):(
                                <Song
                                    idTrack={result.idTrack}
                                    strTrack={result.strTrack}
                                    strAlbum={result.strAlbum}
                                >
                                    <Link to={`/song/${result.idTrack}`}>
                                        <button
                                            className="details-btn "
                                            type="button"                        
                                        >Detalles
                                        </button>            
                                    </Link>
                                </Song>
                            )}
                        </div>
                    )
                })}
            </section>
        </>
    )


}
export default SeachResults;