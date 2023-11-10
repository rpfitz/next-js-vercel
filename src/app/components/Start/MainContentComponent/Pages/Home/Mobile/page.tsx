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

export default function HomePageMobile() {
  return (
    <div id="" className={styles.homePageComponentMobile}>
      <div className={styles.homePageSessionOneComponent}>
        <div className={styles.tryTheBest}>
          <Typography className={styles.homePageSessionOneComponentHahahaha2} variant="h2" gutterBottom  >{firstHeaderHomePage}</Typography>
          <Typography className={styles.homePageSessionOneComponentHahahaha} variant="h2" gutterBottom><strong>{secondHeaderHomePage}</strong></Typography>
        </div>
        <Image src={'/valphill1cortada.png'} alt={altLogoHomePage} width={300} height={600} />
        <div>
          <Typography variant="body1" gutterBottom style={{ fontSize: '1.3em' }}>
            <span className={styles.textinResponsivo}>{textHeaderHomePage}</span>
          </Typography>
          <div className={styles.homePageSessionOneButtonsComponent}>
            <Button variant="contained"><Link href="#contact">{buttonHeaderHomePage}</Link></Button>
          </div>
        </div>
      </div>
      <div className={styles.homePageSessionTwoComponent} style={{}}>
      </div>
    </div>
  )
}