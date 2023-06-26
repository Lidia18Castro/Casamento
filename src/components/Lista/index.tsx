import styles from "./Lista.module.scss"
import Item from "./Itens"
import list from "utilitarios/conteudo.json"

export default function Lista() {
    return (
        <div className={styles.lista}>
            {list.map(item=>{
                return(
                    <Item key={item.id} {...item}/>
                )
            })}
        </div>
    )
}