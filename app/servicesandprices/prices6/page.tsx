import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="სპლიტ-თერაპია: 300₾ დან"/>
        <br/>
        <PriceCard txt="ბრუქსიზმის მკირნალობა: 250₾ დან"/>

    </>
  )
}

export default page