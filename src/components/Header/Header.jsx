import style from '../Header/Header.module.css';
import facebook from '../../img/fb.png';
import youtube from '../../img/Youtube.png';
import audio1 from '../../audio/audio1.mp3'
import Swal from 'sweetalert2'

const Header = () => {

    const reproductor = () =>{
            Swal.fire({
                title: 'Reproductor',
                html: `
                <p>Save Your Tears</p>
                <audio src=${audio1} controls></audio>`
                ,
            })
    }

    return(
        <div className={style.container}>
            <div className={style.slider}>
                <div className={style.slide}></div>
            </div>
            <div className={style.buttons}>
                <div className={style.btn}>
                    <a href='#' target='_blank' className={style.social}><img src={facebook}></img></a>
                    <a href='#' target='_blank' className={style.social}><img src={youtube}></img></a>
                </div>
                <div className={style.containerlogo}>
                    <div className={style.logo}></div>
                    <h5 className={style.title}>Hasta donde el viento nos lleve</h5>
                </div>
                <div className={style.interactive}>
                    <button className={style.glow}><a href="" style={{textDecoration: 'none', color: 'white'}}>Videos</a></button>
                    <button className={style.glow2} onClick={reproductor}>Musica</button>
                </div>

            </div>
        </div>
    )
}

export default Header;