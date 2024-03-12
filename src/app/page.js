import TopBar from '../app/pages/top_bar/page'
import {Card,CardContent, Container, Box, Typography} from '@mui/material';
import Image from 'next/image'
import style from './page.module.css';

export default function Home(){
  return(
    <>
    <TopBar/>
    <Container maxWidth="fluid">
    <Typography sx={{display:'flex',justifyContent:'center',marginBottom:'-1.5rem',paddingLeft:{xs:'2rem',md:'none'}, marginTop:'1rem'}} color="red">Sobre mi o Apretame!!(facetas)</Typography>
      <Box sx={{margin:'2rem', position:'relative',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center'}}>      
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'fill'}}/>
        <CardContent className={style.content}>
          <h2>Romantico</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Sensual</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Agresivo</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
      </Box>
      <Box sx={{margin:'2rem', position:'relative',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center'}}>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'fill'}}/>
        <CardContent className={style.content}>
          <h2>Dormilon</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Amitoso</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
        <Card className={style.cardInit}>
        <Image alt={'Deku img'} src={'/img/pckch.jpg'} width={300} height={150} className={style.image} style={{objectFit:'contain'}}/>
        <CardContent className={style.content}>
          <h2>Con PAPA</h2>
          <p >askldjlasjdkasjdkajsdjl</p>
        </CardContent>
        </Card>
      </Box>
    </Container>
    </>
  );
}