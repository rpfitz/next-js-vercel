"use client"

import * as React from 'react';

import styles from './page.module.css'
import HomePageComponent from './HomePage/page';

import Image from 'next/image';

import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const menu_list = ['Início', 'Sobre', 'Dúvidas', 'Contato'];


export default function PersistentDrawerLeft({ open, setOpen }: any) {
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
              <MenuIcon style={{ display: open ? 'none' : 'block', height: 35, width: 50 }} />
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className={styles.DrawerHeader}>
          <IconButton className={styles.DrawerHeaderIconButton} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={styles.menuContent}>
          <List>
            {menu_list.map((item: any) => {
              return (
                <ListItem key={item} disablePadding>
                  <ListItemButton >
                    <ListItemText className={styles.ListItemText} primary={item} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
          <Divider />
          <div className={styles.socialMenuIcons}>
            <div className={styles.menuIcons}><InstagramIcon /></div>
            <div className={styles.menuIcons}><FacebookIcon /></div>
            <div className={styles.menuIcons}><WhatsAppIcon /></div>
            <div className={styles.menuIcons}><LinkedInIcon /></div>
          </div>
        </div>
      </Drawer>
      <Main className={styles.mainZao} open={open} style={open ? { opacity: 0.5 } : {}}>
        <DrawerHeader />
        <HomePageComponent />
      </Main>
    </Box >
  );
}
