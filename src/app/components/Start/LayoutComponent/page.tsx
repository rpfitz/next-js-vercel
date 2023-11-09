"use client"

import * as React from 'react';

import styles from './page.module.css'
import AppBarComponent from '../AppBarComponent/page';
import DrawerComponent from '../DrawerComponent/page';
import MainContentComponent from '../MainContentComponent/page';

import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function LayoutComponent({ open, setOpen }: any) {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles.containerBox}>
      <CssBaseline />
      <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      <Main id="home" className={styles.mainZao} open={open} style={open ? { opacity: 0.5 } : {}}>
        <DrawerHeader />
        <MainContentComponent />
      </Main>
    </Box >
  );
}
