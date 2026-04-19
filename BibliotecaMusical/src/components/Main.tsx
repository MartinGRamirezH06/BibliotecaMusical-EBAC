import React, { Component } from "react";
import Song, { SongProps } from "./Song.js";
import SeachResults from "./SeachResults";
import { AlbumProps } from "./Album.js";
import Library from "./Library.js";

export interface MainProps{
    onToogleLibrary:()=>void;
    library:(AlbumProps | SongProps)[]
}

const Main = ({onToogleLibrary,library}:MainProps) => {
    return (
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
                <Library library={library}></Library>
                
            </article>
            <article className="main__menu">
                <h2>Albunes recien escuchados</h2>
                <section className="menu__albuns">
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                    <div className="album">
                        <img src="/public/albumPrueba.png" alt="album" />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </div>
                </section>
            </article>
        </main>

    );
}

export default Main