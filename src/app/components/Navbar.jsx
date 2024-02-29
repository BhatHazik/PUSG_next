import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.leftNav}>
            <Image
            src={Logo}
            alt='logo'
            />
        </div>
        <div className={styles.rightNav}>

        </div>
    </div>
  )
}

export default Navbar