// import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import Image from "next/image";
import kelly from "../app/Assets/kelly.png"
import arrow from "../app/Assets/img14.png"
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
            <div className={styles.androidDownloadButton}>

            </div>
            <div className={styles.webLoginButton}>

            </div>
          </div>
        </div>

          </div>
        
        <div className={styles.page1Right}>
          <Image
          src={kelly}
          />
        </div>

      </div>
      </div>
      
    </div>
  );
}
