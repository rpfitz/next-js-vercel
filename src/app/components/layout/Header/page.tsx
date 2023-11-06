"use client"

import { useState } from "react";
import InputSlider from "../../mui/SliderComponent/page"

export default function HeaderComponent(menuItems: any) {
  const MenuItemsExample = ['Início', 'Sobre', 'Soluções', 'Blog', 'Contato']

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
        border: '1px solid black',
      }}>

        <div className="header" style={{
          width: `${larguraDoMenu}%`,
          height: `${alturaDoMenu}px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1em',
          border: '1px solid black',
        }}>

          <div className="header-component left-side logo" style={{
            border: '1px solid black',
          }}>
            Logo
          </div>

          <div className="header-component middle menu-list">
            <ul style={{
              display: 'flex',
              gap: '1em',
              listStyle: 'none',
              border: '1px solid black',
            }}>
              {MenuItemsExample.map((item: any, index: any) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div className="header-component right-side" style={{
            border: '1px solid black',
          }}>
            Session 3
          </div>
        </div>
      </div>

      <div style={{
        margin: '2em',
      }}>
        <InputSlider title={'Largura do Menu'} value={larguraDoMenu} onChange={handleLarguraChange} />
        <InputSlider title={'Altura do Menu'} value={alturaDoMenu} onChange={handleAlturaChange} />
      </div>
    </>
  )
}
