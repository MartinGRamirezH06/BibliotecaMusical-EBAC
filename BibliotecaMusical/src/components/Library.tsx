import Album, { AlbumProps } from "./Album";
import Song,{SongProps} from "./Song";

export interface LibraryProps{
    library:(AlbumProps | SongProps)[];
}
const Library=({library=[]}:LibraryProps)=>{

    if(!library || library.length==0){
        return(
            <section className="main_library__container">
                <h2 className="library_container__title">Biblioteca</h2>
                <p>Playlist agregas:{library.length}</p>
            </section>
        )
    }
    
    return(
        <>
            <section className="main_library__container">
                <section className="library_container__title">
                    <h2>Biblioteca</h2>
                    <p>Playlist agregadas:{library.length}</p>
                </section>
                <section className="library_container__items">
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
                        ></Album>
                    ):(
                        <Song
                            key={item.idTrack}
                            idTrack={item.idTrack}
                            strTrack={item.strTrack}
                            strAlbum={item.strAlbum}
                        />
                    );
                })}
                </section>
            </section>
        </>
    )
}
export default Library;