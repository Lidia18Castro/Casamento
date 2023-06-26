import styles from "./Headder.module.scss"

export default function Header(){
    return(
        <div className={styles.cabecario}>
            <div className={styles.titulo}>
            <h1 className={styles.titulo__escrita}>Lídia e Raphael</h1>
            </div>

        </div>
    )
}