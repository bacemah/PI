
import NavBarItem from "../Nav/NavBarItem";
import './Header.css'
import logo from '../../img/download.png'






const Header = ()=>{
    return(
        <header className="header">
            <nav className="nav">
                <div className="logobox">
                    <img src={logo} height={'30px'} width={'100px'} alt="logo"/>
                </div>
                <navbar className="navBar">
                    <NavBarItem  name="Acceuil"/>
                    <NavBarItem name="About"/>
                    <NavBarItem name="Contact"/>
                </navbar>
            </nav>
        </header>
    )
}


export default Header ;