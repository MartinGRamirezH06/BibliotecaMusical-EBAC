import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import SeachResults from './components/SearchResults/SeachResults.js'
import Library from './components/Library/Library.js'
import { useMusicApp } from './hooks/useMusicApp.js'
import SongDetail from './components/Song/SongDetail.js'
//import './index.css'
import { Routes,Route } from 'react-router-dom'

const App=()=>{
    const {    
      setInput,
      avoidRefresh,
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

        <Main>
          {loading && <p>Buscando...</p>}
          {error && <p>{error}</p>}
          {searchResults &&(
            <pre>{JSON.stringify(searchResults,null,2)}</pre>
          )}

        </Main>


        <Routes>
          <Route path='/' element={
            <SeachResults 
              searchResults={searchResults} 
              loading={loading} 
              error={error}/>}/>
          <Route path='/song/:id' element={<SongDetail/>}></Route>
        </Routes>
    </>
  )  
}
export default App
