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
import Link from 'next/link';

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

      <div className={styles.homePageComponent} style={{ marginBottom: '1em' }}>
        <div className={styles.homePageSessionOneComponent}>
          <div className={styles.tryTheBest}>
            {/* <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.5em' }} variant="h2" gutterBottom  >Tenha Uma</Typography> */}
            {/* <Typography className={styles.homePageSessionOneComponentHahahaha} style={{}} variant="h2" gutterBottom><strong>Consulta de Qualidade</strong></Typography> */}

            <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.8em' }} variant="h2" gutterBottom  >Descubra uma vida</Typography>
            <Typography className={styles.homePageSessionOneComponentHahahaha} style={{}} variant="h2" gutterBottom><strong>Mais saúdavel hoje</strong></Typography>
          </div>

          <Typography variant="body1" gutterBottom style={{ fontSize: '1.5em' }}>
            Sou Dra Valéria Siqueira, médica clínica com uma abordagem centrada no estilo de vida saudável.
            Quero te ajudar a alcançar o seu melhor estado de saúde, prevenindo e tratando doenças, enquanto priorizamos seu bem-estar e qualidade de vida.
          </Typography>

          <div className={styles.homePageSessionOneButtonsComponent}>
            <Button variant="contained"><Link href="#contact">Marcar Consulta</Link></Button>
          </div>
        </div>
        <div className={styles.homePageSessionTwoComponent} style={{}}>
          <Image priority src={'/valphll1.png'} alt={'Dra. Valéria Siqueira'} width={300} height={600} />
        </div>
      </div>

      <div id="" className={styles.homePageComponentMobile} style={{ marginBottom: '1em' }}>
        <div className={styles.homePageSessionOneComponent} style={{ marginTop: 0, paddingTop: 0, }}>
          <div className={styles.tryTheBest} style={{ marginTop: 0, paddingTop: 0, }}>
            <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.5em', fontSize: '2.2em' }} variant="h2" gutterBottom  >Descubra uma vida</Typography>
            <Typography className={styles.homePageSessionOneComponentHahahaha} style={{ lineHeight: '2em', fontSize: '2.3em' }} variant="h2" gutterBottom><strong>Mais saúdavel hoje</strong></Typography>
          </div>
          <Image src={'/valphill1cortada.png'} alt={'Dra. Valéria Siqueira'} width={300} height={600} />
          <div>
            <Typography variant="body1" gutterBottom style={{ fontSize: '1.3em' }}>
              <span className={styles.textinResponsivo}>Sou Dra Valéria Siqueira, médica clínica com uma abordagem centrada no estilo de vida saudável. Quero te ajudar a alcançar o seu melhor estado de saúde, prevenindo e tratando doenças, enquanto priorizamos seu bem-estar e qualidade de vida.</span>

            </Typography>

            <div className={styles.homePageSessionOneButtonsComponent}>
              <Button variant="contained"><Link href="#contact">Marcar Consulta</Link></Button>
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


          {/* <p> 
            Dra. Valéria Siqueira, médica com 29 anos de experiência, é especialista em Clínica Médica e Medicina Integrativa/Funcional, com residência médica na HUPAA. Graduada pela ECMAL, sua jornada na medicina é enriquecida por uma paixão contínua por aprender coisas novas.</p>
          <p>Sua abordagem inovadora visa proporcionar a cada paciente uma jornada em direção à saúde integral, com foco na longevidade saudável. Inspirando mudanças positivas, compartilha insights valiosos em seu perfil no Instagram, tornando cada consulta uma oportunidade para uma vida mais plena.</p>
          <p>Seja bem-vindo a uma experiência de saúde que vai além do convencional, guiada por uma profissional comprometida com seu bem-estar. Transforme sua jornada de cuidados médicos em uma busca constante por uma vida verdadeiramente saudável e significativa.</p> */}

          <h2>Dra. Valéria Siqueira</h2>
          <p><strong>CRMAL 3369 RQE 1560</strong></p>
          <p>Dra. Valéria Siqueira, uma médica dedicada com 29 anos de experiência, é uma referência em cuidados médicos personalizados e compassivos. Sua jornada na medicina começou com a graduação pela ECMAL, seguida pela Residência Médica na HUPAA, onde desenvolveu sua em Clínica Médica e Medicina Integrativa/Funcional.</p>
          <p>Sua abordagem à medicina vai além do tratamento convencional, refletindo seu compromisso inabalável com o bem-estar integral. Dra. Valéria é reconhecida por seu estilo de vida dedicado à longevidade saudável, onde aprender constantemente é uma paixão que se reflete em sua prática médica..</p>


          <h2  >Abordagem</h2>
          <h2 ></h2>

          <p >Dra. Valéria se destaca como especialista em Clínica Médica e Medicina Integrativa/Funcional, oferecendo cuidados especializados que consideram não apenas os sintomas, mas a pessoa como um todo. Sua abordagem única resulta em tratamentos personalizados, combinando precisão diagnóstica com uma compreensão profunda das necessidades individuais.</p>

          <p >A Clínica Médica proporciona diagnósticos certeiros e tratamentos eficazes, enquanto a Medicina Integrativa/Funcional visa abordar as origens dos problemas de saúde, promovendo uma cura completa e duradoura.</p>

          {/* <p><strong>Abordagem Integrativa/funcional</strong></p>
          <p><strong>Estilo de vida e longevidade saudável .</strong></p>
          <p>Experiência em A, com ênfase em B, habilitação em C em D e E</p>
          <p>Atuo também em F (g e h j)</p>
          <p>Amplo conhecimento em G com trabalhos publicados em H e em I.</p> */}
          <Button variant="contained"><Link href="#contact">Saiba mais</Link></Button>

        </div>
      </div>

      <Divider variant='fullWidth' />

      <div id="faq" style={{ margin: 0, padding: 0 }}>
        <div className={styles.faqPageComponent}>
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
      </div>


      <Divider variant='fullWidth' />
    </div>
  )
}
