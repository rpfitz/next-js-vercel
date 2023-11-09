"use client"

import Image from 'next/image'

import styles from './page.module.css'

import { Divider } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const duvidasFrequentes = [
  {
    duvida: 'O que é um médico clínico geral e em que ele se diferencia de outros especialistas?',
    resposta: 'Um médico clínico geral é um profissional de saúde que se concentra no diagnóstico, tratamento e prevenção de uma ampla gama de condições médicas. Eles são treinados para cuidar de pacientes de todas as idades e coordenar o cuidado com outros especialistas quando necessário.',
  },
  {
    duvida: 'Como faço para marcar uma consulta com o médico clínico geral?',
    resposta: 'Para marcar uma consulta, você pode entrar em contato com nossa clínica por telefone ou usar nosso sistema de agendamento online em nosso site. Estamos aqui para atender suas necessidades de atendimento médico.',
  },
  {
    duvida: 'Com que frequência devo consultar um médico clínico geral para check-ups regulares?',
    resposta: 'Recomendamos que os pacientes agendem check-ups anuais para manter sua saúde em dia. No entanto, a frequência pode variar com base em suas necessidades de saúde e idade. Se você tiver condições médicas específicas, seu médico pode recomendar consultas mais frequentes.',
  },
  {
    duvida: 'Quais são os sintomas comuns que devo observar e consultar um clínico geral?',
    resposta: 'Alguns sintomas comuns que podem exigir atenção médica incluem febre persistente, dor crônica, fadiga inexplicável, perda de peso não intencional, entre outros. É importante consultar um médico sempre que sentir preocupações com sua saúde.',
  },
  {
    duvida: 'Qual é o processo de triagem e diagnóstico realizado pelo médico clínico geral?',
    resposta: 'O médico clínico geral realizará uma avaliação completa de sua saúde, incluindo histórico médico, exame físico e, se necessário, exames de laboratório. O diagnóstico e tratamento dependerão dos achados clínicos.',
  },
]

export default function MainContentComponent() {
  return (
    <div className={styles.pageComponent} style={{}}>

      <div id="home" className={styles.homePageComponent} style={{ marginBottom: '1em' }}>
        <div className={styles.homePageSessionOneComponent}>
          <div className={styles.tryTheBest}>
            <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.5em' }} variant="h2" gutterBottom  >Tenha Uma</Typography>
            <Typography className={styles.homePageSessionOneComponentHahahaha} style={{}} variant="h2" gutterBottom><strong>Consulta de Qualidade</strong></Typography>
          </div>

          <Typography variant="body1" gutterBottom style={{ fontSize: '1.5em' }}>
            Sou Dra Valéria Siqueira, médica clínica com uma abordagem centrada no estilo de vida saudável.
            Quero te ajudar a alcançar o seu melhor estado de saúde, prevenindo e tratando doenças, enquanto priorizamos seu bem-estar e qualidade de vida.
          </Typography>

          <div className={styles.homePageSessionOneButtonsComponent}>
            <Button variant="contained"><a href="#contact">Marcar Consulta</a></Button>
          </div>
        </div>
        <div className={styles.homePageSessionTwoComponent} style={{}}>
          <Image src={'/valphll1.png'} alt={'Dra. Valéria Siqueira'} width={300} height={600} />
        </div>
      </div>

      <div id="home" className={styles.homePageComponentMobile} style={{ marginBottom: '1em' }}>
        <div className={styles.homePageSessionOneComponent} style={{ marginTop: 0, paddingTop: 0, }}>
          <div className={styles.tryTheBest} style={{ marginTop: 0, paddingTop: 0, }}>
            <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.5em', marginTop: 0, paddingTop: 0, }} variant="h2" gutterBottom  >Tenha Uma</Typography>
            <Typography className={styles.homePageSessionOneComponentHahahaha} style={{ marginTop: 0, paddingTop: 0, }} variant="h2" gutterBottom><strong>Consulta de Qualidade</strong></Typography>
          </div>
          <Image src={'/valphill1cortada.png'} alt={'Dra. Valéria Siqueira'} width={300} height={600} />
          <div>
            <Typography variant="body1" gutterBottom style={{ fontSize: '1.5em' }}>
              <span className={styles.textinResponsivo}>Sou Dra Valéria Siqueira, médica clínica com uma abordagem centrada no estilo de vida saudável.</span>
              Quero te ajudar a alcançar o seu melhor estado de saúde, prevenindo e tratando doenças, enquanto priorizamos seu bem-estar e qualidade de vida.
            </Typography>

            <div className={styles.homePageSessionOneButtonsComponent}>
              <Button variant="contained"><a href="#contact">Marcar Consulta</a></Button>
            </div>
          </div>
        </div>
        <div className={styles.homePageSessionTwoComponent} style={{}}>
        </div>
      </div>

      <Divider variant='fullWidth' />

      <div id="about" className={styles.aboutPageComponent} style={{ marginTop: '1em' }}>
        <div className={styles.aboutPageSessionOneComponent}>
          <h1>Sobre mim</h1>
          <h2>Dra. Valéria Siqueira</h2>
          <p><strong>CRMAL 3369 RQE 1560</strong></p>
          <p><strong>Abordagem Integrativa/funcional</strong></p>
          <p><strong>Estilo de vida e longevidade saudável .</strong></p>
          <p>Experiência em A, com ênfase em B, habilitação em C em D e E</p>
          <p>Atuo também em F (g e h j)</p>
          <p>Amplo conhecimento em G com trabalhos publicados em H e em I.</p>
          <Button variant="contained"><a href="#contact">Saiba mais</a></Button>
        </div>
      </div>

      <Divider variant='fullWidth' />

      <div id="faq" className={styles.faqPageComponent}>
        <div className={styles.faqPageSessionOneComponent}>
          <h1>Dúvidas Frequentes (FAQ)</h1>
          <div className={styles.faqListComponent}>
            {duvidasFrequentes.map((caso: any, index: any) => {
              return (
                <Accordion key={index} style={{ margin: '0.5em 0', backgroundColor: '' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{caso.duvida}</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ backgroundColor: '#eeeff7' || '#f9faff' }}>
                    <Typography>{caso.resposta}</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </div>
      </div>

      <Divider variant='fullWidth' />
    </div>
  )
}
