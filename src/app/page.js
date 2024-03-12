import TopBar from '../app/pages/top_bar/page'
import {Card,CardContent, Container, Box, Typography} from '@mui/material';
import Image from 'next/image'
import style from './page.module.css';

export default function Home(){
  return(
    <>
    <TopBar/>
    <Container maxWidth="fluid">
    <Typography sx={{display:'flex',justifyContent:'center',marginBottom:'-2.5rem',paddingLeft:{xs:'2rem',md:'none'}, marginTop:'1rem',fontSize:'20px'}} color="#397c5d">Sobre mi o Apretame!!(facetas)</Typography>
      <Box sx={{margin:'2rem', position:'relative',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center'}}>      
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/Romantic.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'none'}}/>
        <CardContent className={style.content}>
          <h2>Romantico</h2>
          <p >Siempre siendo un PEPE LE POUF gatuno...</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/sensual.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'cover'}}/>
        <CardContent className={style.content}>
          <h2>Sensual</h2>
          <p>Mostrando los dotes para la seducción</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/agresivo.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Agresivo</h2>
          <p>Nunca molestarme!!</p>
        </CardContent>
        </Card>
      </Box>
      <Box sx={{margin:'2rem', position:'relative',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center'}}>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/Dormilon.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'fill'}}/>
        <CardContent className={style.content}>
          <h2>Dormilón</h2>
          <p >Una siesta nunca es mala</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/Amistoso.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Amitoso</h2>
          <p >Siempre dispuesto a hacer nuevos Amigos!!</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/conPapa.jpeg'} width={250} height={250} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Con PAPÁ</h2>
          <p >Bueno aqui con mi daddy</p>
        </CardContent>
        </Card>
      </Box>
    </Container>
    </>
  );
}