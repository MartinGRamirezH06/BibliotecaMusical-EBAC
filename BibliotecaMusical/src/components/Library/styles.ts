import styled from "styled-components";
import { AlbumCard } from "../Album/styles";
import { SongCard } from "../Song/styles";

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
export {
    MainContainer__LibraryContainer,
    LibraryContainer__TitleContainer,
    LibraryContainer__ItemsContainer

}