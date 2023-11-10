"use client"

import React from 'react'

import styles from './page.module.css'

import LayoutComponent from './components/Start/LayoutComponent/page'
import FooterComponent from './components/Start/FooterComponent/page'

import { Divider } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <main className={styles.main}>
      <a href="https://wa.me/5582987241343?text=Olá,%20gostaria%20de%20saber%20mais%20informações" style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
      }} target="_blank">
        <i style={{ marginTop: '16' }} className="fa fa-whatsapp"></i>
      </a>
      <LayoutComponent open={open} setOpen={setOpen} />
      <Divider />
      <FooterComponent open={open} />
    </main >
  )
}
