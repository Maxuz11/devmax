import Home from "../../page";
import {Container,Box,Stack, Typography} from '@mui/material';
export default function History(){
    return(
        <div style={{marginBottom:5}}>
            <Home/>
            <Container maxWidth="lg" >
              <Box component={'section'} sx={{display:'flex',flexDirection:{xs:'column',md:'row'},marginTop:2,boxShadow:3, alignItems:'center'}}>
                <div><Typography variant={'5rem'} color="initial">Nacimeinto</Typography></div>
                <div><Typography variant={'2rem'} color="initial">Adopción</Typography></div>
              </Box>
            </Container>
        </div>        
        
    );
}