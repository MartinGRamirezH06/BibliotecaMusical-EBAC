  import { useEffect, useState } from 'react'
  import Header from './components/Header.jsx'
  import Main from './components/Main.jsx'
  import SeachResults from './components/SeachResults.jsx'
  import Library from './components/Library.jsx'
  import './index.css'


  const App=()=>{
    const songsData = [
      {id:1, titulo:"Imagine", autor:"John Lennon", duracion:"3:07"},
      {id:2, titulo:"Bohemian Rhapsody", autor:"Queen", duracion:"5:55"},
      {id:3, titulo:"Billie Jean", autor:"Michael Jackson", duracion:"4:20"},
      {id:4, titulo:"Smells Like Teen Spirit", autor:"Nirvana", duracion:"5:01"}
    ];
    //Estado del input header
    const [input,setInput]=useState("")
    const [searchResults,setSearchResults]=useState([])
    const [library,setLibrary]=useState([])
    const [isLibraryOpen,setIsLibraryOpen]=useState(false)

    const toogleLibrary=()=>{
      setIsLibraryOpen(!isLibraryOpen);
    }
    //hook para los efectos secundarios se ejecuten en el momento exacto de que detecta evento en el teclado y  se depliegue el menu de busqueda
    useEffect(()=>{
        if(input===""){
          setSearchResults([]);
        }else{
          const filtrados=songsData.filter(cancion=> cancion.titulo.toLocaleLowerCase().includes(input.toLowerCase()));
          setSearchResults(filtrados)
        }
      },[input])
      //Funcion que evita que el formulario refresque la pagina
    const avoidRefresh=(evento)=>{
      evento.preventDefault();      
    }
    const AgregarALibreria=(song)=>{
      const yaSeAgrego=library.some((item)=>item.id===song.id)
      if(yaSeAgrego){
        alert("Ya esta en la biblioteca")
        return;
      }
      setLibrary([...library,song])
    }


    useEffect(()=>{
      console.log("Se detecto un cambio en la libreria:", library)
    },[library])

    
    return(
      <>
        <Header setInput={setInput} onSearch={avoidRefresh}></Header>
        <SeachResults searchResults={searchResults} onClick={AgregarALibreria} ></SeachResults>
        <Library library={library} isOpen={isLibraryOpen}></Library>
        <Main onToogleLibrary={toogleLibrary}></Main>
      </>
    )
  }

  export default App
