import styled from "styled-components";
import { AlbumCard } from "../Album/styles";
import { SongCard } from "../Song/styles";
import theme from "../../Theme/theme";
import { ActionButtons } from "../SearchResults/styles";

const MainContainer__LibraryContainer = styled.section`
  width: 100%;
  max-height: 600px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  transition: transform 0.5s ease;
  overflow-y: auto;
  overflow-x: hidden;
`;
const LibraryContainer__TitleContainer= styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  font-size: 1rem;
  box-sizing: border-box;
  width:100%;
`;
const LibraryContainer__ItemsContainer = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  gap:2rem;

  ${AlbumCard}{
    justify-content: space-between;
    box-sizing: border-box;
    display: grid;
    font-size: 1.5rem;
    width: 100%;
    align-items: center;
    cursor: pointer;
    grid-template-columns:0.5fr 1fr;
    max-height: 600px;
    
    
    img{
      grid-column:1;
      width:50%;
    }
    
    h4{
      grid-column:2;
      font-size: 1rem;
    }
    
    p{
      font-size: 1rem;
    }
    &:hover{
      background-color:${({theme}) => theme.colors.hover}
    }
  }
  
  ${SongCard}:hover{
    background-color: ${({theme}) => theme.colors.hover};
  }
`;
const Card__Playlist_Song = styled. div `
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  p{
    text-align: center;
  }
  
  &:hover{
    background-color: ${({theme}) => theme.colors.hover};
    cursor: pointer;
  }


`;

const Library__PlaylistDefault__Container = styled.article`
  width: 70rem;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  right: 25rem;                                                                     5rem;
  top: 5rem;
  flex-direction: column;
`;
const Header__PlaylistDefault__Container= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30rem;
  justify-content: flex-start;

  h3{
    font-size:2rem;
  }

  img{
    width:2rem;

    &:hover{
    cursor: pointer;
    }
  }
`;

const Body__PlaylistDefult__Container = styled.div`
  div{
    width:100%;
    display: flex;  
    gap: 1rem;
    align-items: center;

    &:hover{
      cursor: pointer;
      background-color: ${({theme}) => theme.colors.hover}
    }
  }

  p{
    font-weight:800;
    font-size: 1.5rem;
  }

  ${SongCard}{
    display: flex;
    justify-content: space-between;
    gap:25rem;

    ${ActionButtons}{
      width:80%;
    }
  }
`;

export {
  MainContainer__LibraryContainer,
  LibraryContainer__TitleContainer,
  LibraryContainer__ItemsContainer,
  Library__PlaylistDefault__Container,
  Card__Playlist_Song,
  Header__PlaylistDefault__Container,
  Body__PlaylistDefult__Container,
}