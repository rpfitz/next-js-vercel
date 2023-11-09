"use client"

import * as React from 'react';

import styles from './page.module.css'

import { styled, useTheme } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const menu_list = [
  {
    name: 'Início',
    path: '#home',
  },
  {
    name: 'Sobre',
    path: '#about',
  },
  {
    name: 'Dúvidas',
    path: '#faq',
  },
  {
    name: 'Contato',
    path: '#contact',
  },
]

export default function DrawerComponent({ open, handleDrawerClose }: any) {
  const theme = useTheme();

  return (
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
          {theme.direction === 'ltr' ? <ChevronLeftIcon className={styles.closeIconButton} /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <div className={styles.menuContent}>
        <List>
          {menu_list.map((item: any) => {
            return (
              <ListItem key={item.name} disablePadding>
                <Link href={item.path} style={{ textDecoration: 'none', }} onClick={handleDrawerClose}>
                  <ListItemButton >
                    <ListItemText className={styles.ListItemText} primary={item.name}>
                    </ListItemText>
                  </ListItemButton>
                </Link>

              </ListItem>
            )
          })}
        </List>
        <Divider />
        <div className={styles.socialMenuIcons}>
          <div className={styles.menuIcons}><InstagramIcon className={styles.menuIcon} /></div>
          <div className={styles.menuIcons}><FacebookIcon className={styles.menuIcon} /></div>
          <div className={styles.menuIcons}><WhatsAppIcon className={styles.menuIcon} /></div>
          <div className={styles.menuIcons}><LinkedInIcon className={styles.menuIcon} /></div>
        </div>
      </div>
    </Drawer>
  )
}