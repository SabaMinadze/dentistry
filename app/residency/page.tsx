import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'
import Link from 'next/link'

function page() {
  return (
    <>
    <Link href="/residency/theraphy"><Card name="თერაპიული რეზიდენტურა"/></Link>
    <Link href="/residency/orthodontic"><Card name="ორთოდონტიული რეზიდენტურა"/></Link>
    <Link href="/residency/children"><Card name="ბავშვთა თერაპიული სტომატოლოგია"/></Link>
    </>
  )
}

export default page