import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

let firstHeaderHomePage = `Descubra uma vida`
let secondHeaderHomePage = `Mais saúdavel hoje`
let textHeaderHomePage = `Sou Dra Valéria Siqueira, médica clínica com uma abordagem centrada no estilo de vida saudável.
Quero te ajudar a alcançar o seu melhor estado de saúde, prevenindo e tratando doenças, enquanto priorizamos seu bem-estar e qualidade de vida.`
let buttonHeaderHomePage = `Marcar Consulta`
let altLogoHomePage = `Dra. Valéria Siqueira`

export default function HomePage() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.session1}>
        <div className={styles.headers}>
          <Typography className={styles.header1} variant="h2" gutterBottom>{firstHeaderHomePage}</Typography>
          <Typography className={styles.header2} variant="h2" gutterBottom><strong>{secondHeaderHomePage}</strong></Typography>
        </div>
        <Typography className={styles.paragraph1} variant="body1" gutterBottom>{textHeaderHomePage}</Typography>
        <div className={styles.buttonSession1}>
          <Button variant="contained"><Link href="#contact">{buttonHeaderHomePage}</Link></Button>
        </div>
      </div>
      <div className={styles.session2}>
        <Image priority src={'/valphll1.png'} alt={altLogoHomePage} width={300} height={600} />
      </div>
    </div>
  )
}