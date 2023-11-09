"use client"

import * as React from 'react';

import styles from './page.module.css'

import Image from 'next/image';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarComponent({ open, handleDrawerOpen }: any) {
  return (
    <AppBar
      className={styles.AppBarZero}
      sx={{ boxShadow: 'none' }}
      position="fixed" open={open}>
      <Toolbar className={styles.ToolbarComponent}>
        <div className={styles.TentandoOne}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={styles.menuHambIcon}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon className={styles.MenuIcon} style={{ display: open ? 'none' : 'block', height: 35, width: 50 }} />
          </IconButton>
          <Image
            className={styles.TentandoOneLogo}
            src={'/logovaleriasiqueira.png'}
            alt={'Dra. Valéria Siqueira'}
            quality={100}
            width={1800} height={1000}
          />
        </div>
        <div className={styles.menuItems}>
          <ul className={styles.menuListItems}>
            <li><Typography variant="h6" gutterBottom>Início</Typography></li>
            <li><Typography variant="h6" gutterBottom>Sobre</Typography></li>
            <li><Typography variant="h6" gutterBottom>Dúvidas</Typography></li>
            <li><Button className={styles.menuItemsButton} variant="contained" href="#contact">Contato</Button></li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  )
}