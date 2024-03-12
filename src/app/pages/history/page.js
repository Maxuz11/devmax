import Menu from '../top_bar/page';
import {Container,Box,Typography} from '@mui/material';
import Image from 'next/image'
import style from '../../page.module.css';

const parraf = [{
  title:'Nacimiento',desc:'Nacio un 30 de Febrero en la comuna de quilicura de una camada de 8 gatos, el siendo el ultimo en ser adoptado',img:'/img/Deku0.jpeg'},
  {
    title:'Adopción',desc:`Fue solicitado por mi madre para regalarmelo y \n mi hermana le puso el nombre "DEKU"`,img:'/img/Deku2.jpeg'},
    {title:'Llegada',desc:'Llego una noche de marzo, lleno de pulgas y un poco resfriado',img:'/img/Deku3.jpeg'}
];

const st={display:'flex',flexDirection:{xs:'column',md:'row'},marginTop:2,boxShadow:3, padding:3,justifyContent:'space-evenly'};

export default function History(){
    return(
      <div style={{marginBottom:5}}>
          <Menu/>
          <Container maxWidth={'xl'} >
            <Box component={'section'} sx={st}>
            {parraf.map((item)=>(                                                         
                <div style={{marginBottom:'1rem', textAlign:'center'}} key={item.title}>
                <Image alt={'Deku img'} src={item.img} width={270} height={150} style={{display:'flex', flexWrap:'wrap',objectFit:'cover',margin:'2vh 5vw',borderRadius:'10% 35%',animation: 'tilt-shaking 4s infinite'}}/>
                <Typography variant={'5rem'} sx={{padding:'0.5rem'}} color="initial">{item.title}</Typography>
                <Typography component={'p'} className={style.primary} sx={{padding:'0.5rem',maxWidth:{xs:'100vw',md:'30vw'}}}>{item.desc}</Typography>
                </div>
            ))}
            </Box>
            <Box component={'section'} sx={{...st,flexDirection:'column',textAlign:'center', justifyContent:'center'}}>
              <Typography variant="h2" sx={{fontFamily:'Raleway,Helvetica',animation:'skew-y-shakeing 10s',textShadow:'3px 2px 0px black'}}> Recuerdos</Typography>
              <video width={'100%vw'} height={'350'} style={{margin:'1rem'}} playsInline loop controls>
              <source src="/video/VID-20240310-WA0015.mp4" type="video/mp4"/>
              Your browser does not support the video tag.</video>              
            </Box>
          </Container>
      </div>        
        
    );
}