import { SongCard } from "./styles";
import { Song } from "../types";

const SongComponent=({idTrack, strTrack,strAlbum,children}:Song)=>{
    return(
        <>
            <SongCard
                key={idTrack}
            >
                <h2>{strTrack}</h2>
                <h3>{strAlbum}</h3>
                <div>
                    {children}
                </div>
            </SongCard>
        </>
    )
}
 export default SongComponent;