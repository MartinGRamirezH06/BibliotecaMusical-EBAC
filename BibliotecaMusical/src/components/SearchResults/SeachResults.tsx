import Album, { AlbumProps } from "../Album/Album";
import Song, {SongProps} from "../Song/Song";
import { Link } from "react-router-dom";
import { ActionButttons, MainContainer__ResultsContainer, ResultsContainer__ItemsContainer } from "./styles";
type SearchItem= AlbumProps | SongProps;
export interface ResultsProps{
    searchResults:SearchItem[] | null;
    onClick:(item: SearchItem) => void;
    loading:boolean;
    error:string | null;
} 

const SeachResults=({searchResults, onClick, loading,error}:ResultsProps)=>{
    
    if(loading){
        return (
        <MainContainer__ResultsContainer>
            <p>Cargando...</p>
        </MainContainer__ResultsContainer>
    )
    }
    if(error){
        return (
            <MainContainer__ResultsContainer>
               <h3>{error}</h3> 
               <p>Intenta buscar otra ancion o artista o verifica tu conexion.</p>
            </MainContainer__ResultsContainer>
        );
    }
    if(!searchResults){
        return null;
    }
    if(searchResults.length===0){
        return(
            <MainContainer__ResultsContainer>
                <h3>No se encontraron albunes</h3>
            </MainContainer__ResultsContainer>
        )
    }

    return(
        <>
            <MainContainer__ResultsContainer>
                {/* Hace la busqueda con Map de la lista que recibio como props */}
                
                {searchResults.map((result) => {
                    const isAlbum = !("idTrack" in result);
                    return(
                        <ResultsContainer__ItemsContainer>
                            {isAlbum ? (
                                <Album 
                                    idAlbum={result.idAlbum}
                                    strAlbumThumb={result.strAlbumThumb}
                                    strAlbum={result.strAlbum}
                                    strArtist={result.strArtist}
                                    intYearReleased={result.intYearReleased}
                                >
                                    <ActionButttons
                                        type="button"
                                        onClick={ () => {
                                        onClick(result)
                                        }}
                                    >
                                        Agregar a mi biblioteca
                                    </ActionButttons>
                                </Album>
                            ):(
                                <Song
                                    idTrack={result.idTrack}
                                    strTrack={result.strTrack}
                                    strAlbum={result.strAlbum}
                                >
                                    <Link to={`/song/${result.idTrack}`}>
                                        <ActionButttons
                                            type="button"
                                        >
                                            Detalles
                                        </ActionButttons>
                                    </Link>
                                </Song>
                            )}
                        </ResultsContainer__ItemsContainer>
                    )
                })}
            </MainContainer__ResultsContainer>
        </>
    )


}
export default SeachResults;