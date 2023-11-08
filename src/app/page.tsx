import styles from './page.module.css'
import HeaderComponent from './components/layout/Header/page'
import PersistentDrawerLeft from './components/layout/PersistentDrawer/page'
import LandingPageComponent from './components/LandingPageComponent/page'
import { Divider } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundColor: '#f9faff', fontFamily: 'Lato' }}>
      {/* <LandingPageComponent /> */}
      {/* <HeaderComponent /> */}


      <PersistentDrawerLeft />
      <Divider />
      <div style={{
        width: '100%',
        backgroundColor: '#f9faff',
        height: '100%',

      }}>

        <div id="contact" className={styles.contactPageComponent} style={{ color: 'black', padding: '3em 6em' }}>
          <div className={styles.contactPageSessionOneComponent}>

            <div className={styles.contactFlexSessionComponent} style={{ display: 'flex', gap: '3em', alignItems: 'center', flexWrap: 'wrap' }}>

              <div className={styles.contactFlexSessionOneComponent} style={{ display: 'flex', gap: '1em', flexDirection: 'column', }}>
                <div>
                  <h3>Endereço</h3>
                  <p>The Square - Av. Dr. Antônio Gomes de Barros, 625 - Sala 712 - Jatiúca, Maceió - AL, 57036-001</p>
                </div>
                <div>
                  <h3>Telefone</h3>
                  <p>(82) 98724-1343</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>contato@dravaleriasiqueira.com.br</p>
                </div>
              </div>

              <div className={styles.contactFlexSessionTwoComponent} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <h3>Redes Sociais:</h3>
                <div style={{ display: 'flex', gap: '0.5em' }}>
                  <InstagramIcon />
                  <span>Instagram</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5em' }}>
                  <FacebookIcon />
                  <span>Facebook</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5em' }}>
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5em' }}>
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
