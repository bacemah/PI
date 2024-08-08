import * as React from 'react';
import './navbaritem.css'
const NavBarItem = ( props )=>{


    const name = props.name ;




    return (

        <div className='container'>
            <h4> 
                {name}
            </h4>
            
        </div>


    )
}
export default NavBarItem ;