import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PlayList } from "../../components/types";
import type { Song } from "../../components/types";

interface LibraryState{
    playlist: PlayList [];
}

const initialState : LibraryState = {
    playlist: [],
}

export const librarySlice = createSlice(
    {
        name: "library",
        initialState,
        reducers:{
            addSong: (state, action:PayloadAction<Song>) => {
                //Se busca playlist por defecto
                const defaultPlaylist = state.playlist.find(p => p.idPlaylist === "default");
                if (defaultPlaylist){
                    //Si la cancion existe dentro de la playlist default
                    const songExists = defaultPlaylist.songs.some(
                        song => String(song.idTrack) === String(action.payload.idTrack)
                    )
                    
                    if(!songExists){
                        defaultPlaylist.songs.push(action.payload);
                    }
                }else {
                    const newPlaylist: PlayList ={
                        idPlaylist: "default",
                        name: "Playlist default",
                        songs: [action.payload]
                    }
                    
                    state.playlist.push(newPlaylist);
                }
            },
            removeSong:(state, action: PayloadAction<number | string>) => {
                state.playlist.forEach(pl =>{
                    pl.songs = pl.songs.filter(song => String(song.idTrack) !== String(action.payload));                    
                })
            },
            addAlbum:(state, action: PayloadAction<any>)=>{
                const albumExists = state.playlist.some(
                    pl => String(pl.idPlaylist) === String(action.payload.idAlbum)
                );

                if(!albumExists){
                    const newAlbumPlaylist: PlayList = {
                        idPlaylist: action.payload.idAlbum,
                        name: action.payload.strAlbum,
                        songs: [],
                        strAlbumThumb: action.payload.strAlbumThumb,
                        strArtist: action.payload.strArtist,
                        intYearReleased: action.payload.intYearReleased
                    }

                    state.playlist.push(newAlbumPlaylist);
                }
            },
        }
    }
);


export const { addSong, addAlbum, removeSong} = librarySlice.actions;
const { reducer: libraryReducers} = librarySlice;
export default libraryReducers;