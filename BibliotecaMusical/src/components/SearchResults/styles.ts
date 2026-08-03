import styled from "styled-components";
import { SongCard } from "../Song/styles";
import { AlbumCard } from "../Album/styles";

const MainContainer__ResultsContainer = styled.section`
  width: 33.3%;
  min-height: 400px;
  max-height: 600px;
  background-color: ${({theme})=> theme.colors.backgoundSecondary}; 
  border-radius: 8px;
  padding: 20px;
  margin: 1.4rem 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  position: absolute;
  left: 18.3rem;
  top: 3rem;
  box-sizing: border-box;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ResultsContainer__ItemsContainer = styled.div`
    border-bottom: 1px solid #333;

    ${SongCard}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        div:last-child{
            display: flex;
            flex-direction: column;
            gap:1rem;
        }
    }
    ${AlbumCard}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-direction: inherit;
        img{
            width:50px
        }
    }
`;
const ActionButtons = styled.button`
    background-color:${({theme}) => theme.colors.primary };
    color: ${({theme})=> theme.colors.text};
    border-radius: 1rem;
    width: 100%;
    font-size: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    max-height: 2.2rem;
    border-color:transparent;
    cursor:pointer;
    padding:1rem;
    font-weight:600;
    text-decoration: none;
`;
export{
    MainContainer__ResultsContainer,
    ResultsContainer__ItemsContainer,
    ActionButtons
}