import NavBarItem from "./components/NavBarItem";
import './homeScreen.css' ;
import logo from './img/download.png' ;
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



const HomeScreen = ()=>{
    return(

    <div>
        <header className="header">
            <nav className="nav">
                <div className="logobox">
                    <img src={logo} height={'30px'} width={'100px'}/>
                </div>
                <navbar className="navBar">
                    <NavBarItem  name="Acceuil"/>
                    <NavBarItem name="About"/>
                    <NavBarItem name="Contact"/>
                </navbar>
            </nav>
        </header>
        <main className="main">
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                        id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>

        </main>
        <footer className="footer">
            <div className="footerIcons">
                <LinkedInIcon sx={{fontSize : 40 }}></LinkedInIcon>
                <InstagramIcon sx={{fontSize : 40 }}></InstagramIcon>
                <FacebookIcon sx={{fontSize : 40 }}></FacebookIcon>
            </div>
        </footer>
    </div>
    )

}

export default HomeScreen ;