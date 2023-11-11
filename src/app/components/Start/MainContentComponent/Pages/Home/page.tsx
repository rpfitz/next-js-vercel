import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { home } from '@/config-app'

let whatsAppSendMessageLink = `https://wa.me/5582987241343?text=`
let iconWhatsAppMessage = `Olá Dra Valéria, tudo bem? Gostaria de marcar uma consulta.`

const clientStyles = {
  // mobile?
  header1: { lineHeight: '0.5em', fontSize: '2.2em', margin: 0, padding: 0, },
  // mobile?
  header2: { lineHeight: '2em', fontSize: '2.3em', margin: 0, padding: 0, },
  paragraph1: { fontSize: '1.5em' },

}

export default function HomePage() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.session1}>
        <div className={styles.headers}>
          <Typography style={clientStyles.header1} variant="h2" gutterBottom>{home.first_header}</Typography>
          <Typography style={clientStyles.header2} variant="h2" gutterBottom><strong>{home.second_header}</strong></Typography>
        </div>
        <Typography style={clientStyles.paragraph1} variant="body1" gutterBottom>{home.text_message}</Typography>
        <div className={styles.buttonSession1}>
          <Button variant="contained"><Link href={`${whatsAppSendMessageLink}${iconWhatsAppMessage}`}>{home.button_message}</Link></Button>
        </div>
      </div>
      <div className={styles.session2}>
        <Image priority src={`/${home.hero_img_src_desktop}`} alt={home.alt_hero_image} width={300} height={600} />
      </div>
    </div>
  )
}