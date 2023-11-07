import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';
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

export default function Headerzin() {
  return (
    <div className={styles.headerzin}>

      <div className={styles.menuZin}>
        <ul className={styles.menuItemsList}>
          <a style={{ textDecoration: 'inherit', color: 'white' }} href="#home"><li>Início</li></a>
          <a style={{ textDecoration: 'inherit', color: 'white' }} href="#about"><li>Sobre</li></a>
          <a style={{ textDecoration: 'inherit', color: 'white' }} href="#faq"><li>FAQ</li></a>
          <a style={{ textDecoration: 'inherit', color: 'white' }} href="#contact"><li>Contato</li></a>
          {/* <Button className={styles.headerComponentRightSideButton} style={{ alignSelf: 'right' }} variant="contained">Marcar consulta</Button> */}
        </ul>
      </div>

      <div style={{ width: '100%', height: '2em' }}></div>

      <div className={styles.pageContent}>
        <div id="home" style={{
          display: 'flex',
          // border: '1px solid black',
        }}>
          <div className={styles.apresentacaoDoutor} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1em',
            // border: '1px solid black',
            margin: '1em'
          }}>
            <h4>Obtenha Atendimento Médico Rápido</h4>
            <h1>Serviços Médicos de Alta Qualidade</h1>
            <p>Com 30 anos de experiência e uma paixão pela Medicina Integrativa, estou aqui para ajudá-lo a alcançar a saúde e o bem-estar que você merece. Adote uma abordagem integrativa e funcional para a sua saúde, garantindo um estilo de vida e longevidade saudável. Nunca mais deixe que preocupações com a sua saúde limitem as suas oportunidades.</p>
            <div style={{ display: 'flex', gap: '1em' }}>
              <button style={{
                width: 180,
                height: 40
              }}>Agende sua Consulta</button>
              <button style={{
                width: 180,
                height: 40
              }}><a style={{ textDecoration: 'inherit', color: 'black' }} href="#contact">Entre em Contato</a></button>
            </div>
          </div>
          <div className={styles.fotoDoutor} style={{
            // border: '1px solid black',
            margin: '1em',
            width: '40%',
            maxWidth: '100%',
          }}>
            <Image src={'/VALPH.jpg'} alt={'doctor'} width={300} height={600} style={{ maxWidth: '100%', height: '50vh' }} />
          </div>
        </div>

        <div id="about" style={{
          margin: '1em',
          // border: '1px solid black',
        }}>
          <div className={styles.aboutContainer} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}>
            <p>Sobre mim</p>
            <h1>Dra. Valéria Siqueira</h1>
            <p><strong>CRMAL 3369 RQE 1560</strong></p>
            <p><strong>Abordagem Integrativa/funcional</strong></p>
            <p><strong>Estilo de vida e longevidade saudável .</strong></p>
            <p>Experiência em A, com ênfase em B, habilitação em C em D e E</p>
            <p>Atuo também em F (g e h j)</p>
            <p>Amplo conhecimento em G com trabalhos publicados em H e em I.</p>
            <button style={{ width: 100, height: 40 }}>Saiba mais</button>
          </div>
        </div>

        <div  style={{
          margin: '1em',
          // border: '1px solid black',
        }}>
          <div className={styles.faqContainer} style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h1  style={{marginTop: '0.5em'}} id="faq">Dúvidas Frequentes (FAQ)</h1>

            <div style={{ marginTop: '1em' }}>
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

        <div id="contact" style={{
          margin: '1em',
          // border: '1px solid black',
        }}>

          <div className={styles.contatoContainer} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}>
            <h1 style={{marginTop: '0.25em'}}>Contato</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>

              <div className={styles.informacoesContato} style={{
                // border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5em',
              }}>
                <h3>Endereço</h3>
                <p>The Square - Av. Dr. Antônio Gomes de Barros, 625 - Sala 712 - Jatiúca, Maceió - AL, 57036-001</p>

                <h3>Telefone</h3>
                <p>(82) 98724-1343</p>

                <h3>Email</h3>
                <p>contato@dravaleriasiqueira.com.br</p>
              </div>

              <div className={styles.horarioFuncionamento} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5em',
              }}>
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

      <div className={styles.footerZ}></div>
    </div>
  )
}
