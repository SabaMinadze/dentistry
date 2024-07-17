import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Burgernav from './components/Burgenav/Burgernav'
import styles from './page.module.css'
import Content1st from './components/Content1st/Content1st'
import Image from 'next/image'
import Card from './components/Card/Card'
import Card2 from './components/Card2/Card2'

function page() {
  return (
    <>
      <div className={styles.box}>
        <div>    
          <Subnav/>
        </div> 
        <div className={styles.nav}>
          <Burgernav/>
        </div>

          <div className={styles.content1st}>
            <Content1st/>
          </div>
            <div className={styles.box7}>
              <Card/>
            </div>
            <br/>
            <Card2 name="მარიამ რეხვიშვილი"
             prof="ექიმი ორთოდონტი"
              prof2="თერაპრვტი"
              img={<Image src="/eqimi.jpg" height={150} width={150} alt="eror"/>}
              duty1="ყბა-კბილთა სისტემის გასწორება მოსახსნელი ფირფიტოვანი და მოუხსნელი
               ბრეკეტ-სისტემით მკურნალობა"
               duty2="თანამედროვე ენდოდონტიური მკურნალობა"
               duty3="კარიესის მკურნალობა"
              />
      </div>
    </>
  )
}

export default page