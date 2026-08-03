import { AlbumCard, AlbumCard__Img } from "./styles";
import type { Album } from "../types";


const AlbumComponent=({idAlbum,strArtist,strAlbum,intYearReleased,children,strAlbumThumb}:Album)=>{
    return(
        <AlbumCard>
            <AlbumCard__Img
                src={strAlbumThumb || "/default-album.png"} 
                alt="imagenAlbum"
            />                
            <h4>{strAlbum}</h4>
            <p>{strArtist}</p>
            <p>{intYearReleased}</p>
            <div>
                {children}
            </div>
        </AlbumCard>
    )
}
export default AlbumComponent;