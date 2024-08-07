import * as React from 'react'
import TextField from '@mui/material/TextField';
import Input from '../components/Input';
import './Form.css' ;
import { TextareaAutosize } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const FormScreen = ()=> {



    return(
        <form  method="POST" className="formBox" >


            <div className='firstSec'>
                <TextField 
                required
                sx={{width : 300 }}
                label={"Company's Name "}
                />
                <Input />
            </div>
            <div className='textArea'>
                <TextareaAutosize minRows={30} maxRows={200}   placeholder='Describe Your Idea' style={{width : 1010  , opacity : .75  }}/>
            </div>
            <div className='Buttons'>
                <Stack spacing={2} direction={'row'}>
                    <Button variant="contained" color="success"> Submit </Button>
                    <Button variant="contained" color="error"> Cancel </Button>
                </Stack>
            </div>




        </form>
    )
}



export default FormScreen;