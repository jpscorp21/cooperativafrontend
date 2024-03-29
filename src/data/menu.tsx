import HomeIcon from '@material-ui/icons/Home';
import MoneyIcon from '@material-ui/icons/Money';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArchiveIcon from '@material-ui/icons/Business';
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export interface Menu { 
  icon: React.ReactNode,
  text: string,
  url?: string,
  submenu?: Menu[]
}

export const menu: Menu[] = [
  {
    icon: <HomeIcon></HomeIcon>, 
    text: 'Inicio',
    url: '/',    
  },
  {
    icon: <ArchiveIcon></ArchiveIcon>,
    text: 'Archivos',
    submenu: [
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Barrios',
        url: '/barrios',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Ciudades',
        url: '/ciudades',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Estados Civiles',
        url: '/estadocivil',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Nacionalidades',
        url: '/nacionalidades'},
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Puestos Laborales',
        url: '/puestolaboral',
      },
      { 
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Profesion',
        url: '/profesiones',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Tipo Cuenta',
        url: '/tipocuenta',
      },

      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Cuenta',
        url: '/cuentas',
      },
    ]
  },
  {
    icon: <MoneyIcon></MoneyIcon>, 
    text: 'Cobranzas',
    submenu: [                
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Nueva Cobranza',
        url: '/cobranzas/form',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Conceptos',
        url: '/conceptos',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Facturas',
        url: '/facturas',
      },
      {
        icon: <ArchiveIcon></ArchiveIcon>,
        text: 'Timbrados',
        url: '/timbrados',
      },        
    ],

  },
  {
    icon: <PersonIcon></PersonIcon>,
    text: 'Socios',
    submenu: [
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Ver Socios',
        url: '/socios',
      },
      { 
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Nuevo Socio',
        url: '/socios/form',
      },
    ],
  },
  {
    icon: <DescriptionIcon></DescriptionIcon>,
    text: 'D. Jurada',
    submenu: [
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Ver D. Juradas',
        url: '/declaracionjurada', 
      },
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Nueva D. Jurada',
        url: '/declaracionjurada/form',
      },
    ]
  },
  {
    icon: <DescriptionIcon></DescriptionIcon>,
    text: 'Ahorros',
    submenu: [
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Buscar caja de ahorro',
        url: '/cajaahorrovista',
      },
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Ahorros a la Vista',
        url: '/cajaahorrovista/lista',
      },
    ]
  },
  {
    icon: <DescriptionIcon></DescriptionIcon>,
    text: 'Aportes',
    submenu: [
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Buscar aporte',
        url: '/aportes'
      },      
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Aportes',
        url: '/aportes/lista'
      },      
    ]
  },
  {
    icon: <DescriptionIcon></DescriptionIcon>,
    text: 'Solidaridad',
    submenu: [
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Buscar solidaridad',
        url: '/solidaridad', 
      },
      {
        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Solidaridades',
        url: '/solidaridad/lista', 
      }
    ]
  },
  {
    icon: <DescriptionIcon></DescriptionIcon>,
    text: 'Solicitud Crédito',
    submenu: [
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Ver Solicitud Crédito',
        url: '/solicitudcredito',
      },
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Crear Solicitud Crédito',
        url: '/solicitudcredito/form',
      },      
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Modalidad Pago',
        url: '/modalidadpago',
      },
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Tipo Crédito',
        url: '/tipocredito', 
      },
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Tipo Garantia',
        url: '/tipogarantia',
      },
      {

        icon: <DescriptionIcon></DescriptionIcon>,
        text: 'Tipo Solicitud',
        url: '/tiposolicitud',
      },
    ]
  },
  { 
    icon: <PersonIcon></PersonIcon>, 
    text: 'Usuarios', 
    url: '/usuarios' 
  },
  { 
    icon: <SubjectIcon></SubjectIcon>, 
    text: 'Acerca de', 
    url: '/acerca-de' 
  },
  { 
    icon: <ExitToAppIcon></ExitToAppIcon>, 
    text: 'Salir',  
    url: '/login' 
  },
]

interface MenuItemProps {
  menu: Menu,
  click: (menu: Menu) => void,
  collapse: {[key: string]: boolean},
  submenu?: any
}

const colorText: any = {color: '#37474f', fontSize: '24px'}

export const MenuItem = ({menu, click, collapse, submenu}: MenuItemProps) => (
  <>
  <ListItem button key={menu.text} onClick={() => click(menu)} sx={{pl: submenu ?  4 : '', fontSize: '24px'}}>
    <ListItemIcon sx={{colorText}}>
      {menu.icon}
    </ListItemIcon>  
    
    <ListItemText sx={{...colorText, fontSize: 24, my: 0}}><span style={{fontSize: '14px'}}>{menu.text}</span></ListItemText> 
    {menu.submenu && menu.submenu.length ? 
      collapse[menu.text] ? <ExpandLessIcon sx={colorText} /> : < ExpandMoreIcon sx={{colorText}} /> : null
    }                   
  </ListItem>  
  </>
)