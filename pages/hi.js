import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeadTag from "../components/headtag"
import styles from '../styles/Home.module.css'
export default function hi() {
    return(
        <div className={styles.container}>
            <HeadTag title="Hi" />
            <Navbar />
            <main className={styles.main}>
                <p>Hi,<strong>Sebastian</strong>.</p>
            </main>
            <Footer />
        </div>
    )
}
