// import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import Image from "next/image";
import kelly from "../app/Assets/kelly.png"
import arrow from "../app/Assets/img14.png"
import android from "../app/Assets/img3.png"
import Link from "next/link";
import web from "./Assets/img15.png"
import sideArrows from "./Assets/img19.png"
import skill from "./Assets/img7.png"
import iso from "./Assets/img5.png"
import star from "./Assets/img4.png"
import joistick from "./Assets/img11.png"
import gstCoin from "./Assets/img20.png"
import mobile from "./Assets/img18.png"
import customerSupportIcon from "./Assets/img16.png"
import leaderBoardIcon from "./Assets/img2.png"
export default function Home() {
  return (
    <div className={styles.mainWrapperDiv}>

      {/* page1 structure */}

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

      {/* page2 structure */}

      <div className={styles.page2}>
        <div className={styles.circlesHolder}>
          <span><div><h4>4.3</h4><Image src={star} className={styles.page2Image1}/></div><h3>57,894</h3><h3>Reviews</h3></span>
          <span><div><Image src={iso} className={styles.page2Image2}/></div><h3>ISO</h3><h3>Certified</h3></span>
          <span><div><Image src={skill} className={styles.page2Image3}/></div><h3>100%</h3><h3>Skill Games</h3></span>
          <span><div><Image src={joistick} className={styles.page2Image4}/></div><h3>100%</h3><h3>Gamer Friendly</h3></span>
          <span><div><Image src={gstCoin} className={styles.page2Image5}/></div><h3>100%</h3><h3>GST and TDS</h3><h3>Refund</h3></span>
        </div>
        <div className={styles.featuresHolder}>
          <span><Image src={arrow}/><h1>FEATURES</h1><Image src={arrow} className={styles.fillpedArrow}/></span>
          <div className={styles.featuresIcons}>
            <div><Image src={mobile} className={styles.page2Sec2Image1}/><h3>INSTANT</h3><h3>WITHDRAWLS</h3></div>
            <div><Image src={customerSupportIcon} className={styles.page2Sec2Image2}/><h3>24/7</h3><h3>CUSTOMER</h3><h3>SUPPORT</h3></div>
            <div><Image src={leaderBoardIcon} className={styles.page2Sec2Image3}/><h3>MONTHLY</h3><h3>ESPORTS KINGS</h3><h3>LEADERBOARD</h3></div>
          </div>
        
        </div>
      </div>
      
    </div>
  );
}
