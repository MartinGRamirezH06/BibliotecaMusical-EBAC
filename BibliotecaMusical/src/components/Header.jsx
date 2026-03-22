
const Header=(props)=>{    
    //Recibe el la propiedad para menejar la funcion de useState de setInput de App
    const {setInput,onSearch}=props;
    const handleInputOnChange=(event)=>{
        setInput(event.target.value);
        console.log(event.target.value)
    }
    return(
        <header className= 'header'>
            <div className='header__icons'>
                <i><img src='/public/menuHamburguesa.png' alt='iconoMenu'></img></i>
                <i><img src='/public/iconoYoutubeMusic.png' alt='iconoYoutubeMusic'></img></i>
            </div>
            <div className='header__seach'>
                <form onSubmit={onSearch}>
                    <input 
                        className='input_seach' 
                        type="search" 
                        name="inputSeach" 
                        id="input_seach" 
                        placeholder='Buscar canciones, albunes, artistas, o podcasts' 
                        onChange={handleInputOnChange}
                        autoComplete="off"/>
                </form>

            </div>
            <div className='header__other'>
                <i className='other__icons'><img src='/public/iconoConnection.png' alt='iconoTransmision'></img></i>
                <i className='other__icons'><img src='/public/iconUser.png' alt='icono Usuario'></img></i>
                </div>
        </header>
    )
}
export default Header;
