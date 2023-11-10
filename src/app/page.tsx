"use client"

import React from 'react'

import styles from './page.module.css'

import LayoutComponent from './components/Start/LayoutComponent/page'
import FooterComponent from './components/Start/FooterComponent/page'

import { Divider } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

let whatsAppSendMessageLink = `https://wa.me/5582987241343?text=`
let iconWhatsAppMessage = `Olá, gostaria de saber mais informações sobre a consulta.`

export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className={styles.main}>
      <a className={styles.whatsAppIcon} href={`${whatsAppSendMessageLink}${iconWhatsAppMessage}`} target="_blank"><WhatsAppIcon fontSize='large' /></a>
      <LayoutComponent open={open} setOpen={setOpen} />
      <Divider />
      <FooterComponent open={open} />
    </main >
  )
}
