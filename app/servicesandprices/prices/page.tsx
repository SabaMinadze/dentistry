import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import Link from 'next/link'
import PriceCard from '@/app/components/PriceCard/PriceCard'

function page() {
  return (
    <>
    <br/>
    <PriceCard txt="კარიესის მკურნალობა: 130₾ - 180₾"/>
    <br/>
    <PriceCard txt="პულპიტი, პერიოდონტიტი: 150₾ - 350₾"/>
    <br/>
    <PriceCard txt="რემთერაპია: 30₾"/>
 

    </>
  )
}

export default page