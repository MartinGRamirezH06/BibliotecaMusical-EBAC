import React,{Component} from "react";
import Song from "./Song.jsx";
class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main className="main">
                <article className="main__nav">
                    <nav>
                        <div className="navbar__element">
                            <i><img src="/public/home.png"></img></i>
                            <p>Inicio</p>
                        </div>
                        <div className="navbar__element">
                            <i><img src="/public/home.png"></img></i>
                            <p>Explorar</p>
                        </div>
                        <div className="navbar__element">
                            <i><img src="/public/home.png"></img></i>
                            <p>Mi Bliblioteca</p>
                        </div>
                        <div >
                            <button className="navbar__element-button"><img src="/public/plus.svg"></img>Crear Lista</button>
                        </div>
                    </nav>
                    <section className="main__playlist">
                        <div className="playlist__element">
                            <h3>Playlist 1</h3>
                            <p>Creador</p>
                        </div>
                        <div className="playlist__element">
                            <h3>Playlist 2</h3>
                            <p>Creador 2</p>
                        </div>
                        <div className="playlist__element">
                            <h3>Playlist 3</h3>
                            <p>Creador 3</p>
                        </div>
                </section>
                </article>
                <article className="main__menu">
                    <h2>Albunes recien escuchados</h2>
                    <section className="menu__albuns">
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                        <div className="album">
                            <img src="/public/albumPrueba.png" alt="album"/>
                            <h4>Canciones Miseras</h4>
                            <p>Jose Madero</p>
                        </div>
                    </section>
                    <section className="menu__songs">
                        <Song
                            titulo="Cancion 1"
                            autor="Autor 1"
                            duracion="2:00"
                        ></Song>
                        <Song
                            titulo="Cancion 2"
                            autor="Autor 2"
                            duracion="2:00">

                        </Song>
                        <Song
                            titulo="Cancion 3"
                            autor="Autor 3"
                            duracion="2:00"
                        ></Song>
                        <Song
                            titulo="Cancion 4"
                            autor="Autor 4"
                            duracion="2:00"
                        ></Song>
                    </section>
                </article>
            </main>
        )
    }
}
export default Main