import style from '../Body/Body.module.css'
import Header from '../Header/Header';

const Body = ({ contenido, categoria }) => {

    return(
        <div className={style.container}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.content}>

            <h2 className={style.name}>{categoria ? categoria.nombre : 'Variado'}</h2>

            <div className={style.content}>
                {contenido.length > 0 ? (
                    <div className={style.cards}> 
                        {contenido.map(contenido => (
                            <div key={contenido.titulo} className={style.card}>
                                <div className={style.imagen}>
                                <img src={contenido.imagen} alt={contenido.titulo} className={style.imagenes}></img>
                                <a href={contenido.link} target='_blank' rel="noopener noreferrer" className={style.overlayLink}><p className={style.ver}>Ver</p></a>
                                </div>
                                <div className={style.title}>
                                <h4 className={style.titulo}>{contenido.titulo}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Selecciona una categoría para ver su contenido.</p>
                )}
            </div>
        </div>
        </div>
    )
}

export default Body;