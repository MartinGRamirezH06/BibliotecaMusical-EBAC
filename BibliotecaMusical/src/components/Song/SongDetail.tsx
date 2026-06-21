import { useParams } from "react-router-dom";
import useFetchSearch from "../../hooks/useFetchSearch";
import { useState } from "react";
import { SongProps } from "../Song/Song";
import { SongDetailsCard } from "./styles";

export interface SongDetailProps extends SongProps{
    strArtist?:string;
    intDuration?:string;
    strGenre?:string;
}

const SongDetail = () =>{
    const {id} = useParams();
    const url = id 
    ? `https://www.theaudiodb.com/api/v1/json/2/track.php?h=${id}`
    : ``;
    const {data,loading,error} = useFetchSearch <any>(url);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return <p>No se encontraron los detalles en el servidor</p>;

    const song = data[0];

    return(

        <SongDetailsCard>
            <h2>{song.strTrack}</h2>
            <h3>{song.strAlbum}</h3>
            <h3>{song.strArtist}</h3>
            <h3>{song.intDuration}</h3>
            <h3>{song.strGenre}</h3>
        </SongDetailsCard>
    )

}
export default SongDetail;