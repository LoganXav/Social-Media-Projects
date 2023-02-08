import './leftBar.scss'
import Soldiers from "../../assets/1.png"
import Faction from "../../assets/2.png"
import Clan from "../../assets/3.png"
import Loadout from "../../assets/4.png"
import Medic from "../../assets/5.png"
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/authContext'
const LeftBar = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <Link to={`/profile/${currentUser.userId}`} style={{textDecoration: "none", color: "inherit"}} className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </Link>
          <div className="item">
            <img src={Soldiers} alt="" />
            <span>Soldiers</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Clan</span>
          </div>
          <div className="item">
            <img src={Clan} alt="" />
            <span>Scrimmage</span>
          </div>
          <div className="item">
            <img src={Loadout} alt="" />
            <span>Loadout</span>
          </div>
          <div className="item">
            <img src={Medic} alt="" />
            <span>Medic</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>        
        </div>
        <hr />
        <div className="menu">
        <span>Others</span>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
          <div className="item">
            <img src={Faction} alt="" />
            <span>Faction</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
