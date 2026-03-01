import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className= 'header'>
                <div className='header__icons'>
                    <i><img src='/public/menuHamburguesa.png' alt='iconoMenu'></img></i>
                    <i><img src='/public/iconoYoutubeMusic.png' alt='iconoYoutubeMusic'></img></i>
                </div>
                <div className='header__seach'>
                    <input className='input_seach' type="search" name="" id="input_seach" placeholder='Buscar canciones, albunes, artistas, o podcasts'/>
                </div>
                <div className='header__other'>
                    <i className='other__icons'><img src='/public/iconoConnection.png' alt='iconoTransmision'></img></i>
                    <i className='other__icons'><img src='/public/iconUser.png' alt='icono Usuario'></img></i>
                </div>
            </header>
        )
    }

}
export default Header;
