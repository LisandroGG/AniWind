import style from '../Nav/Nav.module.css'
import logo from '../../img/logo-menu.png'
import Swal from 'sweetalert2'

const Nav = () => {

        const setDarkMode = () => {
            document.querySelector("body").setAttribute('data-theme', 'dark')
        }

        const setLightMode = () => {
            document.querySelector("body").setAttribute('data-theme', 'light')
        }

        const toggleTheme = (e) => {
            if(e.target.checked) setDarkMode();
            else setLightMode()
        }

        const handleAbout = () => {
            Swal.fire({
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facilis quaerat eius! Temporibus sequi eius consequatur totam quibusdam, reprehenderit debitis vel voluptas doloremque assumenda deleniti suscipit voluptates nisi laboriosam.',
                icon: "question",
            })
        }

    return(
        <div className={style.fixed} id='menu'>
        <div className={style.nav}>
            <img src={logo}></img>
            <ul>
                <li><a href="#" style={{textDecoration: 'none', color: '#ffffff'}}>Inicio</a></li>
                <li><a href="#" style={{textDecoration: 'none', color: '#ffffff'}} onClick={handleAbout}>Nosotros</a></li>
                <li><a href="mailto:naoki1278@gmail.com" style={{textDecoration: 'none', color: '#ffffff'}}>Contacto</a></li>
            </ul>
            <div className={style.container}>
            <label>
            <input 
            type="checkbox"
            id='darkmode-toggle'
            onChange={toggleTheme}/>
            <span><i></i></span>
            </label>
            <p>Habilitar modo oscuro</p>
            </div>
        </div>
        </div>
    )
}

export default Nav;