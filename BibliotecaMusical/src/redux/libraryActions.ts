import { Album, Song } from "../components/types"



export const addSong = (song:Song) => {
    return{
        type: "ADD_SONG",
        payload: song
    }
};

export const removeSong = (songId: string ) => {
    return{
        type: "REMOVE_SONG",
        payload: songId
    }
}
export const addAlbum = (album: Album) =>{
    return{
        type: "ADD_ALBUM",
        payload: album
    }
};
