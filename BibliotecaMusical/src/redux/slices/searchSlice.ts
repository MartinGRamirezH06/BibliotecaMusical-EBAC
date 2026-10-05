import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

interface SearchState{
    results: any[] | null,
    loading: boolean,
    error: string | null

}

const initialState: SearchState = {
    results: null,
    loading: false,
    error: null
}

export const fetchMusicData = createAsyncThunk('song/fetchMusicData', async({input,searchType} :{input: string, searchType: 'album' | 'track'}, {rejectWithValue}) => {
    try{
        let url='';
        
        if(searchType === 'album'){
            const artistUrl = `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${encodeURIComponent(input)}`;
            const artistUrlResponse = await axios.get(artistUrl)
        
            if(!artistUrlResponse.data.artists || artistUrlResponse.data.artists.length === 0){
                return rejectWithValue('No se encontro el artista.');
            }

            const idArtist = artistUrlResponse.data.artists[0].idArtist;
            const albumUrl= `https://www.theaudiodb.com/api/v1/json/123/album.php?i=${idArtist}`;
            const albumUrlResponse = await axios.get(albumUrl);

            if(!albumUrlResponse.data.album){
                return rejectWithValue("El artista no tiene álbumes registrados.");
            }
            return albumUrlResponse.data.album;
        }

        if(searchType === 'track'){

            const parts = input.trim().split('-');

            if(parts.length < 2){
                return rejectWithValue('Formato incorrecto. Usa Artista - Cancion');
            }

            const artist = parts[0].trim();
            const song = parts.slice(1).join(' ').trim();
            url = `https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=${encodeURIComponent(artist)}&t=${encodeURIComponent(song)}`;
        }

        const response = await axios.get(url);
        const apiData = response.data.album ?? response.data.track ?? null;

        if(!apiData){
            return rejectWithValue('No se encontraron resultados');
        }

        //este es la informacion de action.payload
        return apiData;
    }catch(error: any){
        return (rejectWithValue('Error en el servidor: '),error);
    }
});

const searchSlice = createSlice({
    name: "results",
    initialState,
    reducers:{
        clearInputSearch: (state) =>{
            state.results = null;
            state.error = null;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchMusicData.pending,(state, action)=>{
            console.log("ENTRANDO A PENDING DE fetchSearch");
            state.results = null;
            state.loading = true;
            state.error= null;
        })
        .addCase(fetchMusicData.fulfilled,(state, action) =>{
            console.log("ENTRANDO AL ESTADO FULFILLED");
            state.results = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchMusicData.rejected, (state, action)=>{
            console.log("ENTRANDO AL ESTADO DE REJECTED ", action);
            state.results = null;
            state.loading = false;
            state.error = action.payload as string;
        })
    }
});

export const {clearInputSearch} = searchSlice.actions;
const { reducer: searchReducers } = searchSlice;
export default searchReducers;

