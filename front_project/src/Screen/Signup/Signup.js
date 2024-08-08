
import SingInput from "../../components/SignInput";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import './Signup.css'





const SignUp = ()=>{

    return (
        <div>
            <Header />
            <div className="formContainer">
                <form method="POST" className="form">
                    <Stack spacing={2} direction={"column"} alignItems={'center'}>
                            <Stack spacing={5} direction={"row"}>
                                <SingInput label="First Name" id="firstName" width={280}/>
                                <SingInput label="Last Name" id="lastName" width={280}/>
                            </Stack>
                            <Stack spacing={2} direction={"column"}>
                            <SingInput label="Email" id="email" width={600}/>
                            <SingInput label="Password" id="password" width={600}/>
                            <SingInput label="Confirm Password" id="confirmPassword" width={600}/>
                        </Stack>
                        <div className="Button">
                            <Button  Color="succes" sx={{width : 200  }} >  
                                <Chip  label="Sign Up" size='xxlarge'/>
                            </Button> 
                        </div>
                    </Stack>
                
                </form>
            </div>
            <Footer />
        </div>
    )

}


export default SignUp ;