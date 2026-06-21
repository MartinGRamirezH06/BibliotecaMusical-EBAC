import styled from "styled-components";

interface FilterButtonProps{
    $isActive: boolean;
}

const HeaderContainer= styled.header`
    width: 100%;
    margin: 0;
    padding: 0.2rem;
    display: grid;
    box-sizing: border-box;
    align-items:center ;
    grid-template-columns: auto 1fr 0.5fr;
    border-bottom:4px solid #242424;
`;
const HeaderImg= styled.img`
    width:110px;
`;
const HeaderContainer__Search= styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`;
const ContainerIcons= styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    gap: 1rem;
    margin-left: 1rem;
`;
const ContainerIcons__Icons= styled.i`
    width: 33%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    &:first-child:hover{
        background-color: #6a6a6a;
        border-radius: 150px;
    }
    &:nth-child(2) {
        img {
            width: 150px;
        }
    }
`;
const Search__Form= styled.form`
    width: 100%;
    display: flex;
    gap: 1rem;
`;
const Search__Input=styled.input`
    grid-column: 2;
    width: 60%;
    height: 3rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding-left: 4rem;
    background-image: url('/lupa.png');
    background-repeat: no-repeat;
    background-position: 1.3rem center;
    background-size: 1.5rem;
    cursor: pointer;
`;
const SearchFilters= styled.div`
    display: flex;
    gap: 1rem;
    width: 20%;
    justify-content: space-between;
`;
const SearchFilters__Button= styled.button<FilterButtonProps>`
    width: 50%;
    border-radius: 20px;
    border-color: ${({theme}) => theme.colors.primary};
    font-size: 1.3rem;
    cursor: pointer;

    background-color:${({ $isActive, theme }) => ($isActive ? theme.colors.primary :'transparent')};
    color: ${({ $isActive, theme}) => ($isActive ? theme.colors.text : 'inherit')};
`;
const HeaderContainer__Others= styled.div`
    grid-column: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    gap: 0.5rem; 
`;
const Others__Icons= styled.i`
  width: 10%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const OthersIconsImg=styled.img`
    width: 2rem;
`;
export {
    HeaderContainer,
    HeaderImg,
    HeaderContainer__Search,
    Search__Form,
    Search__Input,
    SearchFilters,
    SearchFilters__Button,
    ContainerIcons,
    ContainerIcons__Icons,
    HeaderContainer__Others,
    Others__Icons,
    OthersIconsImg

}