import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../title"
import ProfileSection from "./profileSection"
import styles from "./styles.module.css"


export default function Profile(props) {

    const [followTex, setfollowText] = useState("Follow")


    function click(ev) {
    
       setfollowText("Following")

    }


    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            < Title >
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={click}
                    >
                    {followTex}
                    
                </button>
            </Title>
            < ProfileSection >{props.bio}</ProfileSection>
            < ProfileSection >{props.phone}</ProfileSection>
            < ProfileSection >{props.email}</ProfileSection>
            < ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl}>Github</LinkButton>
                    <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                    
                </div>
            </ProfileSection>


        </div>
    )
}