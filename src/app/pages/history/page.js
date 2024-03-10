import Home from "../../page";
import {Container,Box,Typography} from '@mui/material';
import style from '../../page.module.css'
export default function History(){
    return(
        <div style={{marginBottom:5}}>
            <Home/>
            <Container maxWidth="lg" >
              <Box component={'section'} sx={{display:'flex',flexDirection:{xs:'column',md:'row'},marginTop:2,boxShadow:3, alignItems:'center', padding:3,justifyContent:'space-evenly'}}>
                <div style={{marginBottom:'2rem'}}><Typography variant={'5rem'} color="initial">Nacimiento</Typography>
                <Typography component={'p'} className={style.primary}style={{alignSelf:'start'}}>Nacio un 30 de Febrero jajsdklaksdjkasjd aksdjka jsdklajskdj asdjkla jsdklajsdk jaklsdj aklsdja sjdlka jsdlajdsjdaksdja akjsd kajd asdj akjsdka djlkajdajdklajkld </Typography> </div>
                <div style={{marginBottom:'2rem'}}><Typography variant={'2rem'} color="initial">Adopción</Typography>
                <Typography component={'p'} className={style.primary}style={{alignSelf:'start'}}>Nacio un 30 de Febrero jajsdklaksdjkasjd aksdjka jsdklajskdj asdjkla jsdklajsdk jaklsdj aklsdja sjdlka jsdlajdsjdaksdja akjsd kajd asdj akjsdka djlkajdajdklajkld </Typography></div>
              </Box>
            </Container>
        </div>        
        
    );
}