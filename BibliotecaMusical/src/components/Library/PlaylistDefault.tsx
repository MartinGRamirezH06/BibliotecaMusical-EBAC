import { useDispatch } from "react-redux";
import { PlayList } from "../types"
import { Body__PlaylistDefult__Container, Card__Playlist_Song, Header__PlaylistDefault__Container, Library__PlaylistDefault__Container } from "./styles"
import SongComponent from "../Song/Song";
import { ActionButtons } from "../SearchResults/styles";
import { useState } from "react";
import { removeSong } from "../../redux/libraryActions";

interface PlaylistDefaultProps {        
    playlist: PlayList;
}


export const PlaylistDefault = ({playlist}: PlaylistDefaultProps) =>{

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return(
        <>
            <Card__Playlist_Song onClick={() => setIsModalOpen(true)}>
                <h4>Me gusta: </h4>
                <p>{playlist.songs.length} me gusta</p>
            </Card__Playlist_Song>

            {isModalOpen &&(
                <Library__PlaylistDefault__Container>
                    
                    <Header__PlaylistDefault__Container>
                        <div onClick={() => setIsModalOpen(false)}>
                            <img src="/src/img/boton-x.png" alt="icono de cerrar" />
                        </div>
                        <h3>Me gusta</h3>
                    </Header__PlaylistDefault__Container>
                    <Body__PlaylistDefult__Container>
                        {playlist.songs.length === 0 ?(
                            <p>No hay canciones agregadas</p>
                            ):(
                                playlist.songs.map((song, index) => (
                                <div key={song.idTrack}>
                                    <p>{index + 1}.-</p>
                                    <SongComponent
                                        
                                        idTrack={song.idTrack}
                                        strTrack={song.strTrack}
                                        strAlbum={song.strAlbum}
                                    >
                                        <ActionButtons
                                            type="button"
                                            onClick={(e) =>{
                                                e.stopPropagation();
                                                dispatch(removeSong(song.idTrack))
                                            }}
                                        >
                                            Eliminar
                                        </ActionButtons>
                                    </SongComponent>
                                </div>  
                            )))}
                    </Body__PlaylistDefult__Container>
                    
                    

                </Library__PlaylistDefault__Container>
            )}
        </>
    )

}