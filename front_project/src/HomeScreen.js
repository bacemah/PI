import './homeScreen.css' ;
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



const HomeScreen = ()=>{
    return(

    <div>
        <Header />
       
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
        </main>
        <Footer />
        
    </div>
    )

}

export default HomeScreen ;