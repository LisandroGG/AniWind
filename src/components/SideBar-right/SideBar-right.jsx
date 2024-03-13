import style from '../SideBar-right/SideBar-right.module.css'
import { useState } from 'react';

const SideBarRight = ({ categorias, onCategoriaClick }) => {

    const [claseOriginal, setClaseOriginal] = useState(true)
    const [texto, setTexto] = useState("Categorías / Ocultar")

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
                setTexto(("Categorías / Ocultar"))
                setClaseOriginal(true);
            }
        } else{
            console.error("Elemento con clase 'datos' no encontrado");
        }
    }

    return(
        <div className={style.container}>
            <div className={style.datos}>
                <div className={style.categoria}>
                    {categorias.map(categoria => (
                        <button key={categoria.nombre} onClick={() => onCategoriaClick(categoria)} className={style.btn}>
                            <img src={categoria.imagen}></img>
                            <div className={style.btnContent}>
                                <span style={{fontWeight: 'bolder'}}>{categoria.nombre}</span>
                                <span>{categoria.descripcion}</span>
                            </div>
                        </button>
                    ))}
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

export default SideBarRight;