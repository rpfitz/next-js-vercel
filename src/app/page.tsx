"use client"

import React from 'react'

import styles from './page.module.css'

import LayoutComponent from './components/Start/LayoutComponent/page'
import FooterComponent from './components/Start/FooterComponent/page'

import { Divider } from '@mui/material'

export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className={styles.main}>
      <LayoutComponent open={open} setOpen={setOpen} />
      <Divider />
      <FooterComponent open={open} />
    </main >
  )
}
