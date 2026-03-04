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
      </>
    )
  }
}

export default App
