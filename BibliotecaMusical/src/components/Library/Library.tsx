import { useSelector } from "react-redux";
import AlbumComponent from "../Album/Album";
import { LibraryContainer__ItemsContainer, LibraryContainer__TitleContainer, MainContainer__LibraryContainer } from "./styles";
import { RootState } from "../../redux/store";
import { PlaylistDefault } from "./PlaylistDefault";


const Library=()=>{
    const playlist = useSelector((state: RootState) => state.library.playlist);
    console.log(`ELementos de la libreria: `, playlist)

    if(!playlist || playlist.length==0){
        return(
            <MainContainer__LibraryContainer>
                <LibraryContainer__TitleContainer>
                    <h2 className="library_container__title">Biblioteca</h2>
                    <p>Playlist agregas:{playlist.length}</p>
                </LibraryContainer__TitleContainer>
            </MainContainer__LibraryContainer>
        )
    }
    
    return(
        <>
            <MainContainer__LibraryContainer>
                <LibraryContainer__TitleContainer>
                    <h2>Biblioteca</h2>
                    <p>Playlist agregadas:{playlist.length}</p>
                </LibraryContainer__TitleContainer>
                <LibraryContainer__ItemsContainer>
                    {playlist.map((playlist)=>{
                        const isAlbum= playlist.strArtist !== undefined;
                        return isAlbum ?(
                            <AlbumComponent
                                key={playlist.idPlaylist} 
                                idAlbum={playlist.idPlaylist}
                                strAlbumThumb={playlist.strAlbumThumb}
                                strAlbum={playlist.name}
                                strArtist={playlist.strArtist!}
                                intYearReleased={playlist.intYearReleased!}
                            />
                        ) : (
                            <PlaylistDefault
                                key={playlist.idPlaylist}
                                playlist={playlist}
                            />
                        )
                    })}
                </LibraryContainer__ItemsContainer>
            </MainContainer__LibraryContainer>
        </>
    )
}
export default Library;