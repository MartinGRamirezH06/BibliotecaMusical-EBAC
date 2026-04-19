import { ReactNode } from "react";

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
        <div className="Album">
            <img className="AlbumImg" src={strAlbumThumb || "/default-album.png"} alt="imagenAlbum"/>
            <h4>{strAlbum}</h4>
            <p>{strArtist}</p>
            <p>{intYearReleased}</p>
            <div>
                {children}
            </div>
        </div>
    )
}
export default Album;