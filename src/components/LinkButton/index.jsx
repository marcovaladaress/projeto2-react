import styles from "./styles.module.css"

export default function LinkButton (props){
    return(
        <a className={styles.wrapper} href={props.haref}>
            {props.children}
        </a>
    )
}