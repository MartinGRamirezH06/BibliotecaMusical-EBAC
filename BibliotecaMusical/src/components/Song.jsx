import React,{Component} from "react";


const Song=(props)=>{
    const {id,titulo,autor,duracion,children}=props;
    return(
        <div className="Song">
            <h4>{titulo}</h4>
            <p>{autor}</p>                
            <p>{duracion}</p>
            <div className="song-Actions">
                {children}
            </div>

        </div>
    )
}
export default Song;