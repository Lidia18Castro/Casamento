import { useNavigate } from 'react-router-dom'
import styles from './Item.module.scss'
import lista  from "utilitarios/conteudo.json"


type Props = typeof lista[0]

export default function Item(props: Props) {
    const navigate = useNavigate()
    return (
        <div className={styles.container} onClick={()=> navigate(`/item/${props.id}`)}>
            <img src={props.imagen} alt="" className={styles.imagem} />
            <h1 className={styles.titulo}>{props.name}</h1>
            <p className={styles.descricao}>{props.descricao}</p>
            <p className={styles.numero}>R$ {props.numero},00</p>
            
        </div>
    )
}