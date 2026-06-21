import { ReactNode } from "react";
import { AlbumCard, AlbumCard__Img } from "./styles";
export interface AlbumProps{
    idAlbum:string;
    strArtist:string;
    strAlbum:string;
    intYearReleased:string;
    strAlbumThumb?:string;
    children?:ReactNode
}

const Album=({idAlbum,strArtist,strAlbum,intYearReleased,children,strAlbumThumb}:AlbumProps)=>{
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
export default Album;