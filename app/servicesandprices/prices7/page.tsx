import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
        <br/>
        <PriceCard txt="იმპლანტები: 850₾ დან"/>
        <br/>
        <PriceCard txt="სინუს-ლიფტინგი: 2500₾ დან"/>
        <br/>
        <PriceCard txt=""/>
        <br/>


    </>
  )
}

export default page