import React from 'react'
import styles from './Subnav.module.css'
import Link from 'next/link'

function Subnav() {
  return (
    <>
    <div className={styles.contentcontainer}>
      <Link href="/" className={styles.txt}>ჩვენი სტომატოლოგები</Link>
      <Link href="/achievements" className={styles.txt}>ჩვენი მიღწევები</Link>
      <Link href="/residency" className={styles.txt}><div>რეზიდენტურა</div></Link>
      <Link href="/questions" className={styles.txt}><div>კითხვები</div></Link>
      <Link href="/servicesandprices" className={styles.txt}>სერვისები და ფასები</Link>
      <Link href="/contactus" className={styles.txt}>კონტაქტი</Link>
    </div>
    <br/>
    </>
  )
}

export default Subnav