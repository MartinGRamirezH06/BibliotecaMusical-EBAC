import styled from "styled-components";
import { AlbumCard } from "../Album/styles";

const MainContainer = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
`;
const MainContainer__Nav = styled.article`
    grid-column: 1;
    display: flex;
    width: 100%;
    max-width: 300px;
    align-items: flex-start;
    box-sizing: border-box;
    flex-direction: column;
    gap: 1rem;
    border-right: 4px solid ${({theme}) => theme.colors.border};
    margin: 0rem 0.5rem
`;
const NavContainer = styled.nav`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    border-bottom: 4px solid 4px solid ${({theme}) => theme.colors.border};
    align-items: anchor-center;
    box-sizing: border-box;
    margin: 0px;

`;
const NavContainer__Element = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        background-color:${({theme}) => theme.colors.hover};
    }

    img{
        width: 30px;
    }    
`;
const Element__Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 90%;
    font-size: 1.2rem;
    background-color: #292929;
    border-radius: 3rem;
    padding: 1rem;
    margin: 1rem;
    border:1px solid ${({theme}) => theme.colors.background};
    cursor: pointer;

    &:hover{
        background-color:${({theme}) => theme.colors.hover};
    }
`;
const MainContainer__MenuContainer = styled.article`
  grid-column: 2;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0rem;
  gap: 2rem;
`;
const MenuContainer__AlbumsContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

`;

export {
    MainContainer,
    MainContainer__Nav,
    NavContainer,
    NavContainer__Element,
    Element__Button,
    MainContainer__MenuContainer,
    MenuContainer__AlbumsContainer
}