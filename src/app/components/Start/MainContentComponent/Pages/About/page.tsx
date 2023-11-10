import Link from 'next/link';

import styles from './page.module.css'

import Button from '@mui/material/Button';

let headerAboutPage = `Sobre mim`
let header2AboutPage = `Dra. Valéria Siqueira`
let paragraphAboutPage = `CRMAL 3369 RQE 1560`
let paragraph2AboutPage = `Dra. Valéria Siqueira, uma médica dedicada com 29 anos de experiência, é uma referência em cuidados médicos personalizados e compassivos. Sua jornada na medicina começou com a graduação pela ECMAL, seguida pela Residência Médica na HUPAA, onde desenvolveu sua em Clínica Médica e Medicina Integrativa/Funcional.`
let paragraph3AboutPage = `Sua abordagem à medicina vai além do tratamento convencional, refletindo seu compromisso inabalável com o bem-estar integral. Dra. Valéria é reconhecida por seu estilo de vida dedicado à longevidade saudável, onde aprender constantemente é uma paixão que se reflete em sua prática médica.`

let headerAboutPage2 = `Abordagem`
let paragraphAboutPage2 = `Dra. Valéria se destaca como especialista em Clínica Médica e Medicina Integrativa/Funcional, oferecendo cuidados especializados que consideram não apenas os sintomas, mas a pessoa como um todo. Sua abordagem única resulta em tratamentos personalizados, combinando precisão diagnóstica com uma compreensão profunda das necessidades individuais.`
let paragraph2AboutPage2 = `A Clínica Médica proporciona diagnósticos certeiros e tratamentos eficazes, enquanto a Medicina Integrativa/Funcional visa abordar as origens dos problemas de saúde, promovendo uma cura completa e duradoura.`
let buttonAboutPage2 = `Saiba mais`

export default function AboutPage() {
  return (
    <div id="about" className={styles.aboutPageComponent}>
      <div className={styles.aboutPageSessionOneComponent}>
        <h1>{headerAboutPage}</h1>
        <h2>{header2AboutPage}</h2>
        <p><strong>{paragraphAboutPage}</strong></p>
        <p>{paragraph2AboutPage}</p>
        <p>{paragraph3AboutPage}</p>
        <h2>{headerAboutPage2}</h2>
        <p>{paragraphAboutPage2}</p>
        <p>{paragraph2AboutPage2}</p>
        <Button variant="contained"><Link href="#contact">{buttonAboutPage2}</Link></Button>
      </div>
    </div>
  )
}