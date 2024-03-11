import Home from "../../page";
import {Container,Box,Typography} from '@mui/material';
import Image from 'next/image'
import style from '../../page.module.css';

const parraf = [{
  title:'Nacimiento',desc:'Nacio un 30 de Febrero en la comuna de quilicura de una camada de 8 gatos, el siendo el ultimo en ser adoptado',img:'/img/Deku0.jpeg'},
  {
    title:'Adopción',desc:`Fue solicitado por mi madre para regalarmelo y \n mi hermana le puso el nombre "DEKU"`,img:'/img/Deku2.jpeg'}
];
export default function History(){
    return(
      <div style={{marginBottom:5}}>
          <Home/>
          <Container maxWidth={'xl'} >
            <Box component={'section'} sx={{display:'flex',flexDirection:{xs:'column',md:'row'},marginTop:2,boxShadow:3, alignItems:'center', padding:3,justifyContent:'space-evenly'}}>
            {parraf.map((item)=>(
                <div style={{marginBottom:'2rem'}} key={item.title}>
                <Image alt={'Deku img'} src={item.img} width={200} height={100} style={{display:'flex', flexWrap:'wrap',objectFit:'contain',marginLeft:'3.5rem',marginBottom:'1.3rem',borderRadius:'10% 35%',animation:'fade-in 15s infinite'}}/>
                <Typography variant={'5rem'} sx={{padding:'0.5rem'}} color="initial">{item.title}</Typography>
                <Typography component={'p'} className={style.primary} sx={{padding:'0.5rem',maxWidth:{xs:'100vw',md:'30vw'}}}>{item.desc}</Typography>
                </div>
            ))}
            </Box>
          </Container>
      </div>        
        
    );
}