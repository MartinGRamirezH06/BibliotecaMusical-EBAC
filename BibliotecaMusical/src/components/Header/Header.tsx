import React, { ChangeEvent, useState } from "react";
import { ContainerIcons, ContainerIcons__Icons, HeaderContainer, HeaderContainer__Others, HeaderContainer__Search, HeaderImg, Search__Form, Search__Input, SearchFilters, SearchFilters__Button, Others__Icons, OthersIconsImg } from "./styles";

export interface HeaderProps{
    setInput:(value:string)=>void;
    onSearch:(event:React.FormEvent<HTMLFormElement>)=>void;
    searchType:string;
    setSearchType: (type: 'album' | 'track') => void;
}


const Header=({setInput,onSearch,searchType,setSearchType}:HeaderProps)=>{    
    //Recibe el la propiedad para menejar la funcion de useState de setInput de App
    const handleInputOnChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value);
        console.log(event.target.value)
    }
    return(
        <HeaderContainer>
            <ContainerIcons>
                <ContainerIcons__Icons>
                    <HeaderImg src='/public/menuHamburguesa.png' alt='iconoMenu'/>
                </ContainerIcons__Icons>
                <ContainerIcons__Icons>
                    <HeaderImg src='/public/iconoYoutubeMusic.png' alt='iconoYoutubeMusic'/>
                </ContainerIcons__Icons>
            </ContainerIcons>
            <HeaderContainer__Search>
                <Search__Form
                    onSubmit={onSearch}
                >
                    <Search__Input
                        type="search" 
                        name="inputSeach" 
                        id="input_seach" 
                        placeholder='Buscar canciones, albunes, artistas, o podcasts' 
                        onChange={handleInputOnChange}
                        autoComplete="off"
                    />
                    <SearchFilters>
                        <SearchFilters__Button
                            onClick={()=> setSearchType('album')}
                            type="button"
                            $isActive={searchType === 'album'}
                        >
                            Albunes
                        </SearchFilters__Button>
                        <SearchFilters__Button
                            onClick={() => setSearchType('track')}
                            type="button"
                            $isActive={searchType === 'track'}
                        >
                            Canciones   
                        </SearchFilters__Button>
                    </SearchFilters>
                </Search__Form>

            </HeaderContainer__Search>
            <HeaderContainer__Others>
                <Others__Icons>
                    <OthersIconsImg
                        src='/public/iconoConnection.png' 
                        alt='iconoTransmision'
                    />
                </Others__Icons>
                <Others__Icons>
                    <OthersIconsImg
                        src='/public/iconUser.png' 
                        alt='icono Usuario'
                    />
                </Others__Icons>
            </HeaderContainer__Others>
        </HeaderContainer>
    )
}
export default Header;
