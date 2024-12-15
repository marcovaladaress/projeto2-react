import styles from "./styles.module.css"

export default function Profile(props) {

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <h2 className={styles.name}>{props.name}</h2>
            <div className={styles.description}>{props.bio}</div>
            <div className={styles.description}>{props.phone}</div>
            <div className={styles.description}>{props.email}</div>
            <div className={styles.links}>
                <a  href={props.githubUrl} target="_blank">Github</a>
                <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
                <a href={props.instagramUrl} target="_blank">Instagram</a>

            </div>
        </div>
    )
}