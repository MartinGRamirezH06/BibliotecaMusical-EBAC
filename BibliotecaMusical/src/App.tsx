import Header from './components/Header.jsx'
import Main from './components/Main'
import SeachResults from './components/SeachResults.jsx'
import Library from './components/Library.jsx'
import { useMusicApp } from './hooks/useMusicApp.js'
import SongDetail from './components/SongDetail.js'
import './index.css'
import { Routes,Route } from 'react-router-dom'

const App=()=>{
    const {    
      //input,
      setInput,
      //searchResults,
      //setSearchResults,
      library,
      toogleLibrary,
      avoidRefresh,
      AgregarALibreria,
      searchResults,
      loading,
      error,
      searchType,
      setSearchType
      ,}=useMusicApp()
  return(
    <>
        <Header 
          setInput={setInput} 
          onSearch={avoidRefresh} 
          searchType={searchType} 
          setSearchType={setSearchType} />

        <Main 
          onToogleLibrary={toogleLibrary}
          library={library}>

        </Main>


        <Routes>
          <Route path='/' element={<SeachResults searchResults={searchResults} onClick={AgregarALibreria} loading={loading} error={error}/>}/>
          <Route path='/song/:id' element={<SongDetail/>}></Route>
        </Routes>
    </>
  )  
}
export default App
