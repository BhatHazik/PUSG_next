import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Logo from '../../../public/logo1.png'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.leftNav}>
            <Image
            src={Logo}
            alt='logo'
            className={styles.logo}
            />
        </div>
        <div className={styles.rightNav}>
            <h4><Link href='/'>FEATURES</Link></h4>
            <h4><Link href='/'>GAMES</Link></h4>
            <h4><Link href='/'>ABOUT</Link></h4>
            <h4><Link href='/'>DOWNLOAD</Link></h4>
        </div>
    </div>
  )
}

export default Navbar