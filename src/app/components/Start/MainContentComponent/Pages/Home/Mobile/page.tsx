import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { home } from '@/config-app'

let whatsAppSendMessageLink = `https://wa.me/5582987241343?text=`
let iconWhatsAppMessage = `Olá Dra Valéria, tudo bem? Gostaria de mais informações sobre a sua consulta.`

export default function HomePageMobile() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.session1}>
        <div className={styles.headers}>
          <Typography className={styles.header1} variant="h2" gutterBottom  >{home.first_header}</Typography>
          <Typography className={styles.header2} variant="h2" gutterBottom><strong>{home.second_header}</strong></Typography>
        </div>
        <Image src={`/${home.hero_img_src_mobile}`} alt={home.alt_hero_image} width={300} height={600} />
        <div>
          <Typography variant="body1" gutterBottom style={{ fontSize: '1.3em' }}>
            <span className={styles.textMessage}>{home.text_message}</span>
          </Typography>
          <div className={styles.button_session1}>
            <Link href={`${whatsAppSendMessageLink}${iconWhatsAppMessage}`}><Button variant="contained">{home.button_message}</Button></Link>
            {/* <Button variant="contained"><Link href="#contact">{home.button_message}</Link></Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}