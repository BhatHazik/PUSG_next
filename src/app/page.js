// import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import Image from "next/image";
import kelly from "../app/Assets/kelly.png"
import arrow from "../app/Assets/img14.png"
import android from "../app/Assets/img3.png"
import Link from "next/link";
import web from "./Assets/img15.png"
import sideArrows from "./Assets/img19.png"
export default function Home() {
  return (
    <div className={styles.mainWrapperDiv}>

      <div className={styles.page1}>
        <div className={styles.page1ContentDiv}>
          <div className={styles.page1LeftWrapper}>
          <div className={styles.page1Left}>
          <h1>BE A</h1>
          <span><Image src={arrow}/><h2>ESPORTS</h2><Image src={arrow} className={styles.fillpedArrow}/></span>
          <h2 className={styles.playerHeading}>PLAYER</h2>
          
        </div>
        <div className={styles.page1Left2}>
        <div className={styles.downloadButtons}>
            <Link href='/' className={styles.androidDownloadButton}>
              <Image src={android}/>
              <div>
                <h3>Download</h3>
                <h2>Android App</h2>
              </div>
            </Link>
            <Link href='/' className={styles.webLoginButton}>
            <Image src={web}/>
              <div>
                <h3>Login on</h3>
                <h2>Website</h2>
              </div>
            </Link>
          </div>
        </div>

          </div>
        
        <div className={styles.page1Right}>
          <Image
          src={kelly}
          />
        </div>

      </div>
      <Image src={sideArrows} className={styles.page1SideArrows}/>
      </div>
      
    </div>
  );
}
