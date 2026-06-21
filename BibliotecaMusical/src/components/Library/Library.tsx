import Album, { AlbumProps } from "../Album/Album";
import Song,{SongProps} from "../Song/Song";
import { LibraryContainer__ItemsContainer, LibraryContainer__TitleContainer, MainContainer__LibraryContainer } from "./styles";

export interface LibraryProps{
    library:(AlbumProps | SongProps)[];
}
const Library=({library=[]}:LibraryProps)=>{

    if(!library || library.length==0){
        return(
            <MainContainer__LibraryContainer>
                <LibraryContainer__TitleContainer>
                    <h2 className="library_container__title">Biblioteca</h2>
                    <p>Playlist agregas:{library.length}</p>
                </LibraryContainer__TitleContainer>
            </MainContainer__LibraryContainer>
        )
    }
    
    return(
        <>
            <MainContainer__LibraryContainer>
                <LibraryContainer__TitleContainer>
                    <h2>Biblioteca</h2>
                    <p>Playlist agregadas:{library.length}</p>
                </LibraryContainer__TitleContainer>
                <LibraryContainer__ItemsContainer>
                    {library.map((item,index)=>{
                        const isAlbum="idAlbum" in item;
                        return isAlbum ?(
                            <Album
                                key={index} 
                                idAlbum={item.idAlbum}
                                strAlbumThumb={item.strAlbumThumb}
                                strAlbum={item.strAlbum}
                                strArtist={item.strArtist}
                                intYearReleased={item.intYearReleased}
                            />
                        ):(
                        <Song
                            key={item.idTrack}
                            idTrack={item.idTrack}
                            strTrack={item.strTrack}
                            strAlbum={item.strAlbum}
                        />
                        );
                    })}
                </LibraryContainer__ItemsContainer>
            </MainContainer__LibraryContainer>
        </>
    )
}
export default Library;