import styles from './page.module.css'
import HeaderComponent from './components/layout/Header/page'
import PersistentDrawerLeft from './components/layout/PersistentDrawer/page'
import LandingPageComponent from './components/LandingPageComponent/page'
import { Divider } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'

const googleMapsAddress = "https://www.google.com/maps/dir//The+Square+-+Av.+Dr.+Ant%C3%B4nio+Gomes+de+Barros,+625+-+Sala+712+-+Jati%C3%BAca,+Macei%C3%B3+-+AL,+57036-001/@-9.6517957,-35.7893749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x701454f102c4643:0x284f509b97d4ec4f!2m2!1d-35.706973!2d-9.6518055?entry=ttu"

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <LandingPageComponent /> */}
      {/* <HeaderComponent /> */}

      <PersistentDrawerLeft />

      <Divider />

      {/* <div className={styles.footerComponent}>
        <div className={styles.footerSessionOneComponent}>
          <div><h3>Endereço</h3><p><a className={styles.footerAnchorItemOne} href={googleMapsAddress}>The Square - Av. Dr. Antônio Gomes de Barros, 625 - Sala 712 - Jatiúca, Maceió - AL, 57036-001</a></p></div>
          <div><h3>Telefone</h3><p><a className={styles.footerAnchorItemOne} href="">(82) 98724-1343</a></p></div>
          <div><h3>Email</h3><p><a className={styles.footerAnchorItemOne} href="">contato@dravaleriasiqueira.com.br</a></p></div> */}


          {/* <div>
            <h3>Redes Sociais:</h3>
            <div className={styles.contactFlexSessionTwoComponent} style={{ display: 'flex', gap: '0.25em', color: 'rgb(223, 178, 66)' }}>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <InstagramIcon />
              </div>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <FacebookIcon />
              </div>
              <div style={{ display: 'flex', gap: '0.5em' }}>
                <WhatsAppIcon />
              </div>
            </div>
          </div> */}

          
        {/* </div>

        <div className={styles.footerSessionTwoComponent}>
          <h3>Redes Sociais</h3>
          <div className={styles.socialIconsSpan}><InstagramIcon /><span>Instagram</span></div>
          <div className={styles.socialIconsSpan}><FacebookIcon /><span>Facebook</span> </div>
          <div className={styles.socialIconsSpan}><WhatsAppIcon /><span>WhatsApp</span></div>
        </div>

        <div className={styles.footerSessionThreeComponent}>
          <h3>Acesso rápido</h3>
          <div><p><a className={styles.footerAnchorItemOne} href="#">Início</a></p> </div>
          <div><p><a className={styles.footerAnchorItemOne} href="#">Sobre</a></p></div>
          <div><p><a className={styles.footerAnchorItemOne} href="#">Dúvidas</a></p></div>
          <div><p><a className={styles.footerAnchorItemOne} href="#">Contato</a></p></div>
        </div>
      </div> */}

    </main>
  )
}
