import AlbumComponent from "../Album/Album";
import SongComponent from "../Song/Song";
import type { Album, Song } from "../types";
import { Link } from "react-router-dom";
import { ActionButtons, MainContainer__ResultsContainer, ResultsContainer__ItemsContainer } from "./styles";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addAlbum, addSong } from "../../redux/slices/librarySilce";

type SearchItem= Album | Song;

export interface ResultsProps{
    searchResults:SearchItem[] | null;
    //onClick:(item: SearchItem) => void;
    loading:boolean;
    error:string | null;
} 

const SeachResults=({searchResults, loading,error}:ResultsProps)=>{
    
    const dispatch = useDispatch<AppDispatch>();

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
               <p>Intenta buscar otra cancion o artista o verifica tu conexion.</p>
            </MainContainer__ResultsContainer>
        );
    }
    if(!searchResults){
        return null;
    }

    if(!Array.isArray(searchResults)){
        <MainContainer__ResultsContainer>
            <h3>Error de formato Intenta con "Artista - Canción" para pistas.</h3>
        </MainContainer__ResultsContainer>
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
                {searchResults.map((result: any) => {
                    const isAlbum = "idAlbum" in result && !("idTrack" in result);
                    return(
                        <ResultsContainer__ItemsContainer key={isAlbum ? result.idAlbum : result.idTrack}>
                            {isAlbum ? (
                                <AlbumComponent 
                                    idAlbum={result.idAlbum}
                                    strAlbumThumb={result.strAlbumThumb}
                                    strAlbum={result.strAlbum}
                                    strArtist={result.strArtist}
                                    intYearReleased={result.intYearReleased}
                                >
                                    <ActionButtons
                                        type="button"
                                        onClick={ () => {
                                            dispatch(addAlbum(result as Album))
                                        }}
                                    >
                                        Agregar a mi biblioteca
                                    </ActionButtons>
                                </AlbumComponent>
                            ):(
                                <SongComponent
                                    idTrack={result.idTrack}
                                    strTrack={result.strTrack}
                                    strAlbum={result.strAlbum}
                                >
                                    <ActionButtons
                                        type="button"
                                        onClick={() => dispatch(addSong(result))}
                                        >
                                        Agregara a mi biblioteca
                                    </ActionButtons>
                                    <Link to={`/song/${result.idTrack}`}>
                                        <ActionButtons
                                            type="button"
                                        >
                                            Detalles
                                        </ActionButtons>
                                    </Link>
                                </SongComponent>
                            )}
                        </ResultsContainer__ItemsContainer>
                    )
                })}
            </MainContainer__ResultsContainer>
        </>
    )


}
export default SeachResults;