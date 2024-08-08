import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider, Stack } from '@mui/material';
import './Footer.css'
import NavBarItem from '../Nav/NavBarItem' ;





const Footer = () => {
    return (
        <footer className="footer">
          <Stack spacing={2} direction={'column'} alignItems={'center'}>
            <Stack spacing={2} direction={'row'}  divider={<Divider orientation='vertical' variant='middle'flexItem/>}>
                <LinkedInIcon sx={{fontSize : 40 }}></LinkedInIcon>
                <InstagramIcon sx={{fontSize : 40 }}></InstagramIcon>
                <FacebookIcon sx={{fontSize : 40 }}></FacebookIcon>
            </Stack>
            <Stack spacing={5} direction={'row'}>
                <NavBarItem  name="Acceuil"/>
                <NavBarItem name="About"/>
                <NavBarItem name="Contact"/>
            </Stack>
          </Stack>
            
        </footer>
    )
}


export default Footer ;