
import SingInput from "../../components/SignInput" ;
import "./SignScreen.css" ;
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";




const SignScreen = ()=>{
    return (
        <div>
            <Header />
            <div className="formContainer">
                <form method="POST" className="form"> 
                    <div className="email">
                        <SingInput label="Email" type="email" id="email" width={600}/>
                    </div>
                    <div className="password">
                        <SingInput label="Password" type="password" id="password" width={600} />
                    </div>
                    <div className="Button">
                        <Button  Color="succes" sx={{width : 200  }} >  
                            <Chip  label="Sign In" size='xxlarge'/>
                        </Button> 
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SignScreen ;