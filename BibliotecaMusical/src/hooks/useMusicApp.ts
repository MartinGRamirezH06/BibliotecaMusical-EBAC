 import { useEffect, useState } from 'react'
import useFetchSearch from './useFetchSearch';
import { AlbumProps } from '../components/Album/Album';
import { SongProps } from '../components/Song/Song';

type SearchCategory = 'album' | 'track';

export const useMusicApp = () => {
    const [input,setInput] = useState("");
    const [searchType,setSearchType] = useState<SearchCategory>('album');
    const [isLibraryOpen,setIsLibraryOpen] = useState(false);
    const [library,setLibrary] = useState<(AlbumProps | SongProps)[]>([]);
    
    
    const toogleLibrary=()=>{
      setIsLibraryOpen(!isLibraryOpen);
    }
     
const url = input.trim()
  ? (() => {
      if (searchType === "album") {
        return `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(input)}`;
      }

      if (searchType === "track") {
        const parts = input.trim().split("-");

        if (parts.length < 2) {
          return "";
        }

        const artist = parts[0]; 
        const song = parts.slice(1).join(" ");

        return `https://www.theaudiodb.com/api/v1/json/2/searchtrack.php?s=${encodeURIComponent(artist)}&t=${encodeURIComponent(song)}`;
      }

      return "";
    })()
  : "";
      //Funcion que evita que el formulario refresque la pagina
    const avoidRefresh=(evento:React.FormEvent<HTMLFormElement>)=>{
      evento.preventDefault();      
    }
    const {data,loading,error}=useFetchSearch<any>(url);

    const resultsFromAPI=data ?? null;

    const AgregarALibreria = (item: AlbumProps | SongProps) => {
      const idActual = "idAlbum" in item ? item.idAlbum : item.idTrack;
      
      const yaSeAgrego = library.some((fav) => {
        const idFav = "idAlbum" in fav ? fav.idAlbum : fav.idTrack; 
        return ("idAlbum" in fav ? fav.idAlbum : fav.idTrack) === idActual;
      });
      if(yaSeAgrego){
        alert("Ya esta en la biblioteca")
        return;
      }
      setLibrary([...library,item])
    }


    useEffect(()=>{
      console.log("Se detecto un cambio en la libreria:", library)
    },[library])

  return{
    input,
    setInput,
    library,
    isLibraryOpen,
    toogleLibrary,
    avoidRefresh,
    AgregarALibreria,
    searchResults: resultsFromAPI,
    loading,
    error,
    searchType,
    setSearchType,
  }

}
