import './navbar.scss'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext)
    const { currentUser } = useContext(AuthContext)

    return ( 
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>Xavier Institute</span>
                </Link>
                <Link to="/" style={{textDecoration: "none", color: 'black', marginTop: "5px"}}>
                    <HomeOutlinedIcon />
                </Link>
                { darkMode ? (<LightModeOutlinedIcon onClick={toggle} />) : (<DarkModeOutlinedIcon onClick={toggle}/>) }
                <AppsOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <Person2OutlinedIcon />
                <MailOutlineOutlinedIcon />
                <NotificationsActiveOutlinedIcon />
                <Link to={`/profile/${currentUser.userId}`} style={{textDecoration: "none", color: "inherit"}} className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;