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
    <main className={styles.main} style={{ backgroundColor: '#f9faff', }}>
      {/* <LandingPageComponent /> */}
      {/* <HeaderComponent /> */}

      <PersistentDrawerLeft />

      <Divider />

      <div className={styles.contactPageComponent} style={{
        width: '100%',
        backgroundColor: '#2b2b2c',
        height: '100%',
        display: 'flex', gap: '3em', alignItems: 'center', flexWrap: 'wrap',
        zIndex: 99999,
      }}>
        <div className={styles.contactFlexSessionOneComponent} style={{ display: 'flex', gap: '1em', flexDirection: 'column', }}>
          <div className={styles.poxaZero}>
            <h3>Endereço</h3>
            <p><a href="https://www.google.com/maps/dir//The+Square+-+Av.+Dr.+Ant%C3%B4nio+Gomes+de+Barros,+625+-+Sala+712+-+Jati%C3%BAca,+Macei%C3%B3+-+AL,+57036-001/@-9.6517957,-35.7893749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x701454f102c4643:0x284f509b97d4ec4f!2m2!1d-35.706973!2d-9.6518055?entry=ttu" style={{ textDecoration: 'none', color: 'rgb(223, 178, 66)' }}>The Square - Av. Dr. Antônio Gomes de Barros, 625 - Sala 712 - Jatiúca, Maceió - AL, 57036-001</a></p>
          </div>
          <div>
            <h3>Telefone</h3>
            <p><a href="#" style={{ textDecoration: 'none', color: 'rgb(223, 178, 66)' }}>(82) 98724-1343</a></p>
          </div>
          <div>
            <h3>Email</h3>
            <p><a href="#" style={{ textDecoration: 'none', color: 'rgb(223, 178, 66)' }}>contato@dravaleriasiqueira.com.br</a></p>
          </div>
          <div>
            {/* <h3>Redes Sociais:</h3> */}
            {/* <div className={styles.contactFlexSessionTwoComponent} style={{ display: 'flex', gap: '0.25em' }}>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <InstagramIcon />
              </div>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <FacebookIcon />
              </div>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <WhatsAppIcon />
              </div>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <LinkedInIcon />
              </div>
            </div> */}
          </div>

        </div>

        {/* <div className={styles.contactFlexSessionTwoComponent} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
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

        </div> */}
      </div>

    </main>
  )
}
