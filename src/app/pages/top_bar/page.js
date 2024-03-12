'use client';
import * as React from 'react';
import styles from "../../page.module.css";
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import Button from '@mui/material/Button';
import { HistoryToggleOffSharp, InsertPhotoSharp, PetsSharp } from '@mui/icons-material';
import { Typography } from '@mui/material'
import Link from 'next/link';

export default function TopBar() {
  return (
    <Container maxWidth="fluid" className={styles.bgPrimary} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', direction: 'initial', margin: 0 }}>
     <Menu/>      
    </Container>
  );
}

function Menu(){
  const [open,setOpen] = React.useState(false);

  const abrirDrawer = (open) =>()=>{
    setOpen(open);
  };
  return(
    <><IconButton aria-label="menu" sx={{fontSize:'large',color:'black', marginLeft: -1}} onClick={abrirDrawer(true)}>
    <WidgetsSharpIcon/> Menu
  </IconButton>
  <Typography sx={{marginLeft:-3,color:'black',fontFamily:'Raleway,Helvetica',fontWeight:'bolder',fontSize:30,fontStyle:'oblique'}}>DEKU PAGE</Typography>
  <Avatar alt='DEKU' src='/img/Deku0.jpeg' sx={{marginRight:0,width:35, height:35}}></Avatar>
  <Drawer
    anchor="left"
    open={open}
    onClose={abrirDrawer(false)}
    sx={{backgroundColor:'rgba(0,0,0, 0.5)'}}
  >
    <Button
    className={styles.primary}   
      size='medium' 
      sx={{margin:'0.8rem'}} 
    > <Link href="/" style={{textDecoration:'none'}}>Inicio</Link>
    </Button>
    <Button
    className={styles.primary}
      startIcon={<HistoryToggleOffSharp/>}    
      size='medium' 
      sx={{margin:'0.8rem'}}   
    > <Link href="/pages/history" style={{textDecoration:'none'}}>Historia</Link>
    </Button>
    {/* <Button
      className={styles.primary}
      startIcon={<PetsSharp/>}    
      size='medium' 
      sx={{margin:'0.8rem'}}     
    > Lazzy
    </Button>
    <Button
      className={styles.primary}
      startIcon={<InsertPhotoSharp/>}    
      size='medium' 
      sx={{margin:'0.8rem'}}     
    > Fotos
    </Button> */}
  </Drawer> </>
  );
}