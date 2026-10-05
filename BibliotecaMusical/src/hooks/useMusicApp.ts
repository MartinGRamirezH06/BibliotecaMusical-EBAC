import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../redux/store';
import { clearInputSearch, fetchMusicData } from '../redux/slices/searchSlice';



type SearchCategory = 'album' | 'track';

export const useMusicApp = () => {
    const [input,setInput] = useState("");
    const [searchType,setSearchType] = useState<SearchCategory>('album');
    const [isLibraryOpen,setIsLibraryOpen] = useState(false);
    
    const dispatch = useDispatch<AppDispatch>();
    
    const {results, loading, error} = useSelector((state: RootState) => state.search); 
    
    const toogleLibrary=()=>{
      setIsLibraryOpen(!isLibraryOpen);
    }
     
      //Funcion que evita que el formulario refresque la pagina
    const avoidRefresh=(evento:React.FormEvent<HTMLFormElement>)=>{
      evento.preventDefault();
    }
    
    useEffect(()=>{
      if(input.trim() === ""){
        dispatch(clearInputSearch());
        return;
      }
      const timer = setTimeout(()=>{
        dispatch(fetchMusicData({input, searchType}));
      },1000);

      return() => clearTimeout(timer);
    },[input, searchType, dispatch])

  return{
    input,
    setInput,
    isLibraryOpen,
    toogleLibrary,
    avoidRefresh,
    searchResults: results,
    loading,
    error,
    searchType,
    setSearchType,
  }

}
