import styles from './page.module.css'

import { Divider } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { faq } from '@/config-app';

export default function FaqPage() {
  return (
    <div id="faq" className={styles.faqPageComponent}>
      <div className={styles.faqPageSessionOneComponent}>
        <h1>{faq.header_message}</h1>
        <div className={styles.faqListComponent}>
          {faq.questions.map((q: any, index: any) => {
            return (
              <Accordion key={index} style={{ margin: '0.5em 0' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{q.question}</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails style={{ backgroundColor: '#eeeff7' || '#f9faff' }}>
                  <Typography>{q.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </div>
      </div>
    </div>
  )
}