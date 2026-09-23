import Navbar from "@/components/navbar/Navbar"
import styles from "./about.module.css"

export default function About() {
    return(
        <div className={styles.main}>
            <Navbar></Navbar>
            <h1>About</h1>
        </div>
    )
}