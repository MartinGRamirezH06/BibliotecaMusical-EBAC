import { useParams } from "react-router-dom";
import { Song } from "../types/index";
import { SongDetailsCard } from "./styles";
import { fetchMusicData } from "../../redux/slices/searchSlice";
import { useEffect, useState } from "react";
import axios from "axios";

export interface SongDetailProps extends Song{
    strArtist?:string;
    intDuration?:string;
    strGenre?:string;
}

const SongDetail = () =>{
    const {id} = useParams();
    
    const [song, setSong] = useState<SongDetailProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchDetails = async() =>{
            if(!id) return;

            setLoading(true);
            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?h=${id}`)
            
                if(response.data && response.data.track){
                    setSong(response.data.track[0]);
                } else{
                    setError("No se encontraron los detalles de esta pista.");
                }
            }catch(error){
                setError("Fallo en el servidor al hacer la peticion de los detalles");
                console.log(error);
            } finally{
                setLoading(false);
            }
        };
        fetchDetails();
    },[id]);

    if(loading) return <SongDetailsCard><h3>Cargando...</h3>;</SongDetailsCard>
    if(error) return <SongDetailsCard><h3>{error}</h3>;</SongDetailsCard>
    if(!song) return <SongDetailsCard><h3>No se encontraron los detalles de esta cancion</h3></SongDetailsCard>


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