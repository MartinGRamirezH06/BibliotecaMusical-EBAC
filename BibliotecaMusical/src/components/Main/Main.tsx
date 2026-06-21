import React, { Component } from "react";
import Song, { SongProps } from "../Song/Song.js";
import SeachResults from "../SearchResults/SeachResults.js";
import { AlbumProps } from "../Album/Album.js";
import Library from "../Library/Library.js";
import { Element__Button, MainContainer, MainContainer__MenuContainer, MainContainer__Nav, MenuContainer__AlbumsContainer, NavContainer, NavContainer__Element } from "./styles.js";
import { AlbumCard, AlbumCard__Img } from "../Album/styles.js";

export interface MainProps{
    onToogleLibrary:()=>void;
    library:(AlbumProps | SongProps)[]
}

const Main = ({onToogleLibrary,library}:MainProps) => {
    return (

        <MainContainer>
            <MainContainer__Nav>
                <NavContainer>
                    <NavContainer__Element>
                        <i><img src="/public/home.png"></img></i>
                        <p>Inicio</p>
                    </NavContainer__Element>
                    <NavContainer__Element>
                        <i><img src="/public/home.png"></img></i>
                        <p>Explorar</p>
                    </NavContainer__Element>
                    <NavContainer__Element>
                        <i><img src="/public/home.png"></img></i>
                        <p>Mi Bliblioteca</p>
                    </NavContainer__Element>
                    <Element__Button>
                        <img src="/public/plus.svg"/>
                        Crear Lista
                    </Element__Button>
                </NavContainer>
                <Library library={library}></Library>
            </MainContainer__Nav>
            <MainContainer__MenuContainer>
                <h2>Albunes recien escuchados</h2>
                <MenuContainer__AlbumsContainer>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                    <AlbumCard>
                        <AlbumCard__Img
                        src="/public/albumPrueba.png"
                        alt="album"
                        />
                        <h4>Canciones Miseras</h4>
                        <p>Jose Madero</p>
                    </AlbumCard>
                </MenuContainer__AlbumsContainer>
            </MainContainer__MenuContainer>
        </MainContainer>
    );
}

export default Main