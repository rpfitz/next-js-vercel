"use client"

import { useState } from "react";
import InputSlider from "../../mui/SliderComponent/page"
import Button from '@mui/material/Button';
import styles from './page.module.css'
import BasicMenu from "./BasicMenu/page";

export default function HeaderComponent(menuItems: any) {
  const MenuItemsExample: string[] = ['Início', 'Sobre', 'Serviços', 'Contato']
  const logoName = 'Dra. Valéria Siqueira'

  const [larguraDoMenu, setLarguraDoMenu] = useState(100);
  const [alturaDoMenu, setAlturaDoMenu] = useState(80);

  const handleLarguraChange = (value: number) => {
    setLarguraDoMenu(value);
  };

  const handleAlturaChange = (value: number) => {
    setAlturaDoMenu(value);
  };

  return (
    <>
      <div className="header-background" style={{
        height: `${alturaDoMenu}px`,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid black',
      }}>

        <div className="header" style={{
          width: `${larguraDoMenu}%`,
          height: `${alturaDoMenu}px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1em',
          // border: '1px solid black',
          borderBottom: '1px solid black',
        }}>

          <div className="header-component-left-side-logo" style={{
            // border: '1px solid black',
          }}>
            <div>{logoName}</div>
          </div>

          <div className={styles.headerComponentMiddleMenuList}>
            <ul style={{
              display: 'flex',
              gap: '1em',
              listStyle: 'none',
              // border: '1px solid black',
            }}>
              {MenuItemsExample.map((item: any, index: any) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.headerComponentRightSide} style={{
            // border: '1px solid black',
          }}>
            <Button className={styles.headerComponentRightSideButton} variant="contained">Marcar consulta</Button>
            <div className={styles.headerComponentRightSideResponsiveMenu}>
              <BasicMenu menuItems={MenuItemsExample} />
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{
        margin: '2em',
      }}>
        <InputSlider title={'Largura do Menu'} value={larguraDoMenu} onChange={handleLarguraChange} />
        <InputSlider title={'Altura do Menu'} value={alturaDoMenu} onChange={handleAlturaChange} />
      </div> */}
    </>
  )
}
