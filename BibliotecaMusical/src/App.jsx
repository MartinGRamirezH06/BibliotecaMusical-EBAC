import {Component} from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Song from './components/Song.jsx'

class App extends Component{
  componentDidMount(){
    console.log("App cargado correctamente")
  }
  render(){
    return(
      <>
        <Header></Header>
        <Main></Main>
        <Song
          titulo="Cancion 2"
          autor="Autor 2"
          duracion="2:00">
        </Song>
        <Song
          titulo="Cancion 3"
          autor="Autor 3"
          duracion="2:00">
        </Song>
        <Song
          titulo="Cancion 4"
          autor="Autor 4"
          duracion="2:00">
        </Song>
      </>
    )
  }
}

export default App
