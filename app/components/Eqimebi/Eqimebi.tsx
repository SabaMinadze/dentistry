import React from 'react'
import styles from './Eqimebi.module.css'
import Card2 from '../Card2/Card2'
import Image from 'next/image'

function Eqimebi() {
  return (
    <>
    <br/><br/><br/>
    <Card2 name="ანა ვოსკანიანი"
             prof="ექიმი სტომატოლოგი თერაპევტი"
              prof2="პირის ღრუს ქორურგი"
              img={<Image src="/eqimi.jpg" height={150} width={150} alt="eror"/>}
                duty1="იმპლანტაცია"
                duty2="სთეტიური სტომატოლოგია"
                duty3="ღრძილების ქირურგიული პლასტიკა"
                duty4="კარიესის მკურნალობა"
              />
    <br/><br/><br/> 
    <Card2 name="ლანა ჭულუხაძე"
             prof="თერაპევტი ქირურგი"
             prof2="სტომატოლოგი"
              img={<Image src="/eqimi2.jpg" height={150} width={150} alt="eror"/>}
                duty1="კარიესის მკურნალობა"
                duty2="თანამედროვე ერთოდონტიური მკურნალობა"
                duty3="მხატვრული რესტავრაცია"
                duty4="ესთეტიური სტომატოლოგია"
                duty5="პირის ღრუს პროფესიული ჰიგიენა"
              />         
    </>
  )
}

export default Eqimebi