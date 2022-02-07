import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeadTag from "../components/headtag"
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function hi() {
    return(
        <div className={styles.container}>
            <HeadTag title="Hi" />
            <Navbar />
            <main className={styles.main}>
                <p>Hi,<strong>Sebastian</strong>.</p>
                <div className="p-4 bg-base-200 rounded-box carousel carousel-center space-x-6" style={{width: '40rem'}}>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link href="/redirect/alltime">
                            <div className="card bg-base shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div className="card-body">
                                    <h2 className="card-title text-blue-600">alltime</h2>
                                    <p>고등학생을 위한 커뮤니티, 입시/학교생활 도우미</p>
                                    <div className="justify-between">
                                        <li className="badge badge-xs bg-yellow-200" ></li> JavaScript
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
