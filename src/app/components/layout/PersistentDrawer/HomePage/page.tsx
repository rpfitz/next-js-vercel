import Image from 'next/image'
import styles from './page.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const googleMapsAddress = "https://www.google.com/maps/dir//The+Square+-+Av.+Dr.+Ant%C3%B4nio+Gomes+de+Barros,+625+-+Sala+712+-+Jati%C3%BAca,+Macei%C3%B3+-+AL,+57036-001/@-9.6517957,-35.7893749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x701454f102c4643:0x284f509b97d4ec4f!2m2!1d-35.706973!2d-9.6518055?entry=ttu"

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
  // {
  //   duvida: 'Que tipos de tratamentos ou encaminhamentos um clínico geral pode oferecer?',
  //   resposta: 'O médico clínico geral pode oferecer tratamentos para uma variedade de condições médicas. Eles também podem encaminhá-lo a especialistas, se necessário, para um cuidado mais específico.',
  // },
  // {
  //   duvida: 'Como devo me preparar para uma consulta com um médico clínico geral?',
  //   resposta: 'É útil trazer seus registros médicos anteriores, lista de medicamentos, informações de seguro e uma lista de perguntas que você gostaria de fazer durante a consulta.',
  // },
  // {
  //   duvida: 'Quanto tempo dura uma consulta médica clínica geral típica?',
  //   resposta: 'O tempo de uma consulta pode variar, mas normalmente dura cerca de 30 a 45 minutos. Isso pode variar dependendo da complexidade de suas preocupações de saúde.',
  // },
  // {
  //   duvida: 'Quais são as medidas de precaução recomendadas para a saúde geral?',
  //   resposta: 'Recomendamos manter um estilo de vida saudável, que inclui uma dieta equilibrada, exercícios regulares, sono adequado e evitar hábitos prejudiciais, como tabagismo e consumo excessivo de álcool.',
  // },
  // {
  //   duvida: 'Como faço para agendar ou reagendar uma consulta com você?',
  //   resposta: 'Você pode solicitar para agendar ou reagendar sua consulta entrando em contato conosco por whatsapp, telefone, instagram ou através do em nosso site. Estamos à disposição para ajudar com suas necessidades de atendimento médico.',
  // },
]

export default function HomePageComponent() {
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
        <div className={styles.homePageSessionOneComponent} style={{ marginTop: 0, paddingTop: 0,}}>
          <div className={styles.tryTheBest} style={{ marginTop: 0, paddingTop: 0,}}>
            <Typography className={styles.homePageSessionOneComponentHahahaha2} style={{ lineHeight: '0.5em', marginTop: 0, paddingTop: 0, }} variant="h2" gutterBottom  >Tenha Uma</Typography>
            <Typography className={styles.homePageSessionOneComponentHahahaha} style={{ marginTop: 0, paddingTop: 0, }} variant="h2" gutterBottom><strong>Consulta de Qualidade</strong></Typography>
          </div>
          <Image src={'/valphll1.png'} alt={'Dra. Valéria Siqueira'} width={300} height={600} />
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
                  <AccordionDetails style={{ backgroundColor: 'white' || '#f9faff' }}>
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
