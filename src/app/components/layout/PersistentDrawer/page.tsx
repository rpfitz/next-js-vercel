"use client"

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Button from '@mui/material/Button';
import Image from 'next/image';

import styles from './page.module.css'
import HomePageComponent from './HomePage/page';


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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // page_containerBox__DOVkZ MuiBox-root css-0
    <Box className={styles.containerBox}>
      <CssBaseline />

      {/* MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-ap9q21-MuiPaper-root-MuiAppBar-root */}
      <AppBar
        sx={{ boxShadow: 'none' }}
        style={{
          backgroundColor: '#f9faff',
          color: 'black',
        }} position="fixed" open={open}>
        <Toolbar className={styles.AppBar}>

          <div className={styles.TentandoOne}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={styles.menuHambIcon}
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon style={{ display: open ? 'none' : 'block' }} />
            </IconButton>

            {/* <Typography noWrap component="div" style={{ fontStyle: 'bold', fontSize: '1.2em'}}>Dra Valéria Siqueira</Typography> */}
            <Image
              className={styles.TentandoOneLogo}
              src={'/logovaleriasiqueira.png'}
              alt={'Dra. Valéria Siqueira'}
              quality={100}
              width={1800} height={1000}
            />

          </div>

          <div className={styles.menuItems}>
            <ul style={{ display: 'flex', gap: '2em', listStyle: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '1.5em' }}>
              <li><Typography variant="h6" gutterBottom>Início</Typography></li>
              <li><Typography variant="h6" gutterBottom>Sobre</Typography></li>
              <li><Typography variant="h6" gutterBottom>Serviços</Typography></li>
              <li><Button style={{ height: 40, width: '10em', backgroundColor: '#f9faff', textTransform: 'none' }} variant="contained">
                <a style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5em' }} href="#contact">Contato</a>
              </Button></li>
            </ul>
          </div>

        </Toolbar>
      </AppBar>

      {/* MuiDrawer-root MuiDrawer-docked css-1f2xuhi-MuiDrawer-docked */}
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
        <DrawerHeader style={{ backgroundColor: '#2b2b2c', }}>
          <IconButton onClick={handleDrawerClose} style={{ color: '#f9faff'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <div style={{
          backgroundColor: '#2b2b2c',
          width: '100%',
          height: '100%',
        }}>
          <List style={{ color: '#f9faff', }}>
            <ListItem key={'Início'} disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <InboxIcon style={{ color: '#f9faff', }} />
                </ListItemIcon>
                <ListItemText primary={'Início'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Sobre'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon style={{ color: '#f9faff', }} />
                </ListItemIcon>
                <ListItemText primary={'Sobre'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Serviços'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon style={{ color: '#f9faff', }} />
                </ListItemIcon>
                <ListItemText primary={'Serviços'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Contato'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon style={{ color: '#f9faff', }} />
                </ListItemIcon>
                <ListItemText primary={'Contato'} />
              </ListItemButton>
            </ListItem>

          </List>

          <Divider light={true} />
          <Divider light={true} />
          <Divider light={true} />
          <Divider light={true} />
        <Divider />


          <div className={styles.contactFlexSessionTwoComponent} style={{
            display: 'flex',
            gap: '1em',
            justifyContent: 'center',
            width: '100%',
            marginTop: '1em',
            color: '#f9faff',
          }}>
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
          </div>
        </div>

      </Drawer>

      {/* css-yfo96e */}
      <Main className={styles.mainZao} open={open}>
        <DrawerHeader />
        <HomePageComponent />
      </Main>

    </Box>
  );
}
