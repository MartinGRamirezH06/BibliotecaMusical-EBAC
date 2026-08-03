import type { Song, Album, PlayList } from "../components/types"

interface LibraryState{
    playlist: PlayList [];
}

interface SongAction{
    type: string;
    payload: any;
}

const initialState: LibraryState = {
    playlist: []
}

const libraryReducers = (state = initialState, action: any) => {
     switch(action.type){
        case "ADD_SONG":
            const defaultPlaylistIndex = state.playlist.findIndex(p => p.idPlaylist === "default");
            if( defaultPlaylistIndex >= 0){
                const songExists = state.playlist[defaultPlaylistIndex].songs.some(
                    song => String(song.idTrack) === String(action.payload.idTrack) 
                )
                
                if(songExists) return state;
                
                const updatePlaylist =[...state.playlist];
                updatePlaylist[defaultPlaylistIndex] = {
                    ...updatePlaylist[defaultPlaylistIndex],
                    songs:[...updatePlaylist[defaultPlaylistIndex].songs, action.payload] 
                };
                return{
                    ...state,
                    playlist: updatePlaylist
                };
            }
            else{
                const newPlaylist: PlayList = {
                    idPlaylist: "default",
                    name: "Playlist default",
                    songs: [action.payload] 
                }
                return{
                    ...state,
                    playlist: [...state.playlist, newPlaylist]
                }
            }
        case "REMOVE_SONG":
            return {
                ...state,
                playlist: state.playlist.map(pl => {
                    return{
                        ...pl,
                        songs: pl.songs.filter(song => String(song.idTrack) !== String(action.payload))
                    }

                })
            }

        case "ADD_ALBUM":

            const albumExists = state.playlist.some(
                pl => String(pl.idPlaylist) === String(action.payload.idAlbum)
            );

            if(albumExists) return state;
            
            const newAlbumPlaylist: PlayList={
                idPlaylist: action.payload.idAlbum,
                name: action.payload.strAlbum,
                songs: [],
                strAlbumThumb: action.payload.strAlbumThumb,
                strArtist: action.payload.strArtist,
                intYearReleased: action.payload.intYearReleased
            };
            return{
                ...state,
                playlist: [...state.playlist, newAlbumPlaylist]
            }
        default:
            return state;
     }
}

export default libraryReducers;