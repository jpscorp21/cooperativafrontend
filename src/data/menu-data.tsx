import HomeIcon from '@material-ui/icons/Home';
import MoneyIcon from '@material-ui/icons/Money';
import DescriptionIcon from '@material-ui/icons/Description';
import SubjectIcon from '@material-ui/icons/Subject';
import ArchiveIcon from '@material-ui/icons/Business';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { menu, Menu } from "./menu";

// 1 Administrador
// 2 Gerente General
// 3 Atencion al socio
// 4 Cajero
// 5 Socio
// 6 Asesor de creditos

export const menuRole: {[key: string]: Menu[]} = {
    "1": [...menu],
    "2": [...menu],
    "3": [
        {
            icon: <HomeIcon></HomeIcon>, 
            text: 'Inicio',
            url: '/',    
        },
        {
            icon: <DescriptionIcon></DescriptionIcon>,
            text: 'Aportes',
            submenu: [
              {
                icon: <DescriptionIcon></DescriptionIcon>,
                text: 'Aportes',
                url: '/aportes'
              }
            ]
        },
        {
            icon: <DescriptionIcon></DescriptionIcon>,
            text: 'Ahorros',
            submenu: [
              {
                icon: <DescriptionIcon></DescriptionIcon>,
                text: 'Ahorros a la Vista',
                url: '/cajaahorrovista',
              },
            ]
        },
        {
            icon: <DescriptionIcon></DescriptionIcon>,
            text: 'Solidaridad',
            submenu: [
                {
                icon: <DescriptionIcon></DescriptionIcon>,
                text: 'Solidaridad',
                url: '/solidaridad', 
                }
            ]
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
    ],
    "4": [
        {
            icon: <HomeIcon></HomeIcon>, 
            text: 'Inicio',
            url: '/',    
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
            icon: <SubjectIcon></SubjectIcon>, 
            text: 'Acerca de', 
            url: '/acerca-de' 
          },
          { 
            icon: <ExitToAppIcon></ExitToAppIcon>, 
            text: 'Salir',  
            url: '/login' 
            },
    ],
    "5": [
        {
            icon: <HomeIcon></HomeIcon>, 
            text: 'Inicio',
            url: '/',    
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
    ],
    "6": [
        {
            icon: <HomeIcon></HomeIcon>, 
            text: 'Inicio',
            url: '/',    
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
            icon: <SubjectIcon></SubjectIcon>, 
            text: 'Acerca de', 
            url: '/acerca-de' 
          },
          { 
            icon: <ExitToAppIcon></ExitToAppIcon>, 
            text: 'Salir',  
            url: '/login' 
          },
    ],

} 