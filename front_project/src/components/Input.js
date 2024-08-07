import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ForestIcon from '@mui/icons-material/Forest';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import SchoolIcon from '@mui/icons-material/School';
import ConstructionIcon from '@mui/icons-material/Construction';




const Input = ()=>{

    const domaines = [{ key : "1" , name : "Sante" , icon :  <MedicationLiquidIcon/>} ,
         {key : "2" , name : "Agriculture" , icon :  <ForestIcon/>  } , {key : "3" , name : "Tourisme" , icon :  <HouseboatIcon/>} 
         , {key : "4" ,name :"Industrielle"  , icon :  <ConstructionIcon/>} 
         , {key : "5" , name : "Eductaion"  , icon :  <SchoolIcon/> }]


    return(
        <Autocomplete
        id='select-domaine'
        sx={{width : 300}} 
        options={domaines}
        getOptionLabel={(options)=> options.name }
        renderOption={( props , options)=>{
                const {key , ...optionsProp } = props  ;
            return(
                <Box
                
                    key = {key}
                    component="li"
                    sx={{  mr: 2, flexShrink: 0 } }
                    {...optionsProp}>
                    {options.icon}
                    <span style={{marginLeft : '7px'}}>{options.name}</span>
                </Box>
            )
        }}
        renderInput={(params)=>{
            return (
                <TextField 
                required
                {...params}
                label="Domaine"
                />
            )
        }}

        />

    ) ;
}
export default Input ;