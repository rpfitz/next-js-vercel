import Image from 'next/image'
import styles from './page.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
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
  {
    duvida: 'Que tipos de tratamentos ou encaminhamentos um clínico geral pode oferecer?',
    resposta: 'O médico clínico geral pode oferecer tratamentos para uma variedade de condições médicas. Eles também podem encaminhá-lo a especialistas, se necessário, para um cuidado mais específico.',
  },
  {
    duvida: 'Como devo me preparar para uma consulta com um médico clínico geral?',
    resposta: 'É útil trazer seus registros médicos anteriores, lista de medicamentos, informações de seguro e uma lista de perguntas que você gostaria de fazer durante a consulta.',
  },
  {
    duvida: 'Quanto tempo dura uma consulta médica clínica geral típica?',
    resposta: 'O tempo de uma consulta pode variar, mas normalmente dura cerca de 30 a 45 minutos. Isso pode variar dependendo da complexidade de suas preocupações de saúde.',
  },
  {
    duvida: 'Quais são as medidas de precaução recomendadas para a saúde geral?',
    resposta: 'Recomendamos manter um estilo de vida saudável, que inclui uma dieta equilibrada, exercícios regulares, sono adequado e evitar hábitos prejudiciais, como tabagismo e consumo excessivo de álcool.',
  },
  {
    duvida: 'Como faço para agendar ou reagendar uma consulta com você?',
    resposta: 'Você pode solicitar para agendar ou reagendar sua consulta entrando em contato conosco por whatsapp, telefone, instagram ou através do em nosso site. Estamos à disposição para ajudar com suas necessidades de atendimento médico.',
  },
]

export default function LandingPageComponent() {
  return (
    <div className={styles.landingPageComponent}>

      <div className={styles.menuComponent}>
        <ul className={styles.menuItemsList}>
          <a className={styles.menuItem} href="#home"><li>Início</li></a>
          <a className={styles.menuItem} href="#about"><li>Sobre</li></a>
          <a className={styles.menuItem} href="#faq"><li>FAQ</li></a>
          <a className={styles.menuItem} href="#contact"><li>Contato</li></a>
        </ul>
      </div>

      <div className={styles.pageComponent}>
        <div id="home" className={styles.homePageComponent}>
          <div className={styles.homePageSessionOneComponent}>
            <h4>Obtenha Atendimento Médico Rápido</h4>
            <h1>Serviços Médicos de Alta Qualidade</h1>
            <p>Com 30 anos de experiência e uma paixão pela Medicina Integrativa, estou aqui para ajudá-lo a alcançar a saúde e o bem-estar que você merece. Adote uma abordagem integrativa e funcional para a sua saúde, garantindo um estilo de vida e longevidade saudável. Nunca mais deixe que preocupações com a sua saúde limitem as suas oportunidades.</p>
            <div className={styles.homePageSessionOneButtonsComponent}>
              <button>Agende sua Consulta</button>
              <button><a href="#contact">Entre em Contato</a></button>
            </div>
          </div>
          <div className={styles.homePageSessionTwoComponent}>
            <Image src={'/VALPH.jpg'} alt={'Dra. Valéria Siqueira'} width={300} height={600} style={{ maxWidth: '100%', height: '50vh' }} />
          </div>
        </div>

        <div id="about" className={styles.aboutPageComponent}>
          <div className={styles.aboutPageSessionOneComponent}>
            <p>Sobre mim</p>
            <h1>Dra. Valéria Siqueira</h1>
            <p><strong>CRMAL 3369 RQE 1560</strong></p>
            <p><strong>Abordagem Integrativa/funcional</strong></p>
            <p><strong>Estilo de vida e longevidade saudável .</strong></p>
            <p>Experiência em A, com ênfase em B, habilitação em C em D e E</p>
            <p>Atuo também em F (g e h j)</p>
            <p>Amplo conhecimento em G com trabalhos publicados em H e em I.</p>
            <button>Saiba mais</button>
          </div>
        </div>

        <div id="faq" className={styles.faqPageComponent}>
          <div className={styles.faqPageSessionOneComponent}>
            <h1>Dúvidas Frequentes (FAQ)</h1>
            <div className={styles.faqListComponent}>
              {duvidasFrequentes.map((caso: any, index: any) => {
                return (
                  <Accordion key={index} style={{ margin: '0.5em 0', backgroundColor: 'rgb(246, 247, 248)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{caso.duvida}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white' }}>
                      <Typography>{caso.resposta}</Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </div>
          </div>
        </div>

        <div id="contact" className={styles.contactPageComponent}>
          <div className={styles.contactPageSessionOneComponent}>
            <h1>Contato</h1>
            <div className={styles.contactFlexSessionComponent}>
              <div className={styles.contactFlexSessionOneComponent}>
                <h3>Endereço</h3>
                <p>The Square - Av. Dr. Antônio Gomes de Barros, 625 - Sala 712 - Jatiúca, Maceió - AL, 57036-001</p>
                <h3>Telefone</h3>
                <p>(82) 98724-1343</p>
                <h3>Email</h3>
                <p>contato@dravaleriasiqueira.com.br</p>
              </div>
              <div className={styles.contactFlexSessionTwoComponent}>
                <h3>Horário de funcionamento</h3>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Segunda-feira</td>
                      <td>08:00–18:00</td>
                    </tr>
                    <tr>
                      <td>Terça-feira</td>
                      <td>08:00–18:00</td>
                    </tr>
                    <tr>
                      <td>Quarta-feira</td>
                      <td>08:00–18:00</td>
                    </tr>
                    <tr>
                      <td>Quinta-feira</td>
                      <td>08:00–18:00</td>
                    </tr>
                    <tr>
                      <td>Sexta-feira</td>
                      <td>08:00–18:00</td>
                    </tr>
                    <tr>
                      <td>Sábado</td>
                      <td>08:00–13:00</td>
                    </tr>
                    <tr>
                      <td>Domingo</td>
                      <td>Fechado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.footerComponent}></div>
    </div>
  )
}
