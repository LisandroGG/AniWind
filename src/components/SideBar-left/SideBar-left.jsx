import style from '../SideBar-left/SideBar-left.module.css'
import banner from '../../img/mini-head-ethan.png'
import img1 from '../../img/rank-dragon-blue.png'
import img2 from '../../img/rank-dragon-plata.png'
import img3 from '../../img/rank-dragon-red.png'
import img4 from '../../img/rank-scepter.png'
import { useState } from 'react'

const SideBarLeft = ({ categorias, onCategoriaClick }) => {

    const [claseOriginal, setClaseOriginal] = useState(true)
    const [texto, setTexto] = useState("Mis tonterías / Ocultar")

    const HandleMenu = () => {
        const miBoton = document.querySelector(`.${style.ocultar}`);
        const miMain = document.querySelector(`.${style.container}`)

        if(miMain && miBoton){
            if (claseOriginal) {
                miMain.classList.remove(style.claseOriginal);
                miBoton.classList.remove(style.claseOriginal);
                miMain.classList.add(style.containerOculto);
                miBoton.classList.add(style.ocultarbtn2)
                setTexto('☰')
                setClaseOriginal(false);
            } else {
                miMain.classList.remove(style.containerOculto);
                miBoton.classList.remove(style.ocultarbtn2)
                miMain.classList.add(style.claseOriginal);
                miBoton.classList.remove(style.claseOriginal)
                setTexto(("Mis tonterías / Ocultar"))
                setClaseOriginal(true);
            }
        } else{
            console.error("Elemento con clase 'datos' no encontrado");
        }
    }

    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.user}>
                <img src={banner} width={'100%'} height={'42%'}></img>
                <div className={style.usuario}>
                <div className={style.img}></div>
                    
                    <h3 style={{color: `var(--logoColor)`}}>Mi nombre</h3>
                    <p style={{color: 'silver'}}>Si tenes ganas de leer tonterías</p>
                    <p style={{color: 'silver'}}>esta zona es tu lugar XD</p>
                    <div>
                        <img src={img4} alt="scepter" className={style.imagenes}/>
                        <img src={img2} alt="plata" className={style.imagenes}/>
                        <img src={img3} alt="red" className={style.imagenes}/>
                        <img src={img1} alt="blue" className={style.imagenes}/>
                    </div>
                </div>
                </div>

                <div className={style.datos}>
                    <div className={style.publicaciones}>
                    {categorias.map(categoria => (
                        <button key={categoria.nombre} onClick={() => onCategoriaClick(categoria)} className={style.btn}>
                            <img src={categoria.imagen}></img>
                            <div className={style.btnContent}>
                                <span style={{fontWeight: 'bolder', overflowX: 'hidden'}}>{categoria.nombre}</span>
                                <span>{categoria.descripcion}</span>
                            </div>
                        </button>
                    ))}
                    </div>
                </div>
            </div>
            <div className={style.ocultar}>
                <button className={style.ocultarbtn} onClick={HandleMenu}>
                    <span>{texto}</span>
                </button>
            </div>
        </div>
    )
}

export default SideBarLeft;