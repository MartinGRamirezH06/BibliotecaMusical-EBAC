import { ReactNode, useEffect, useState } from "react";
import useFetchSearch from "../hooks/useFetchSearch";
import { useParams } from "react-router-dom";

export interface SongProps{
    idTrack:string;
    strTrack:string;
    strAlbum:string;
    children?:ReactNode
}
const Song=({idTrack, strTrack,strAlbum,children}:SongProps)=>{
    return(
        <>
            <div 
            key={idTrack}
            className="Song">
                <h2>{strTrack}</h2>
                <h3>{strAlbum}</h3>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
 export default Song;