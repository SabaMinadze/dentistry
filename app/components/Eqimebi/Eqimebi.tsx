import React from 'react'
import styles from './Eqimebi.module.css'
import Card2 from '../Card2/Card2'
import Image from 'next/image'

function Eqimebi() {
  return (
    <>
    <br/><br/><br/>
    <Card2 name="მარიამ რეხვიშვილი"
             prof="ექიმი ორთოდონტი"
              prof2="თერაპრვტი"
              img={<Image src="/eqimi.jpg" height={150} width={150} alt="eror"/>}
              duty1="ყბა-კბილთა სისტემის გასწორება მოსახსნელი ფირფიტოვანი და მოუხსნელი
               ბრეკეტ-სისტემით მკურნალობა"
               duty2="თანამედროვე ენდოდონტიური მკურნალობა"
               duty3="კარიესის მკურნალობა"
              />
    <br/><br/><br/>          
    </>
  )
}

export default Eqimebi