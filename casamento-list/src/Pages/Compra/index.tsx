import { useParams } from "react-router-dom"
import styles from './Compra.module.scss'
import list from "utilitarios/conteudo.json"




export default function Compra(){
    const params = useParams()
    const id = Number(params.id)-1
    return(
        <div className={styles.container}>
        <img src={list[id].imagen} alt="Erro ao carregar imagem" className={styles.imagem} />
        <h1 className={styles.titulo}>{list[id].name}</h1>
        <p className={styles.descricao}>{list[id].descricao}</p>
        <p className={styles.numero}>R$ {list[id].numero},00</p>
        <img src={`/imagens/qr_code/qrcode-pix_${list[id].numero}.png`} alt="" className={styles.pixCode} />
    </div>
    )}
    