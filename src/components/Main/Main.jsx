import { useState } from 'react';
import data from '../../data.json'

import style from '../Main/Main.module.css'

import Body from '../Body/Body';
import SideBarLeft from '../SideBar-left/SideBar-left';
import SideBarRight from '../SideBar-right/SideBar-right';

const Main = () => {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
    const [contenidoCategoriaSeleccionada, setContenidoCategoriaSeleccionada] = useState([]);

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
        setContenidoCategoriaSeleccionada(categoria.contenidos);
    };


    return(
        <div className={style.MainContainer}>
            <div className={style.left}>
                <SideBarLeft onCategoriaClick={handleCategoriaClick} categorias={data.categorias}/>
            </div>
            <div className={style.middle}>
                <Body contenido={contenidoCategoriaSeleccionada} categoria={categoriaSeleccionada}/>
            </div>
            <div className={style.right}>
                <SideBarRight onCategoriaClick={handleCategoriaClick} categorias={data.categorias}/>
            </div>
        </div>
    )
}

export default Main;