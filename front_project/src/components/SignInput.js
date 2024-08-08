
import { TextField } from "@mui/material"






const SingInput = (props)=>{

    const label  = props.label
    const type = props.type
    const id = props.id
    const width = props.width


    return(

        <div>
            <TextField
                required
                id={id}
                label = {label}
                type={type}
                sx={{width : width } }

            />
        </div>

    )
}


export default SingInput