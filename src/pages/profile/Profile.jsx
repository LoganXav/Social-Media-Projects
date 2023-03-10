import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Posts from '../../components/posts/Posts'

const Profile = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.hdqwalls.com/download/call-of-duty-modern-warfare-4k-wz-1920x1080.jpg" alt="" className="cover" />
        <img src="https://images.hdqwalls.com/download/call-of-duty-modern-warfare-2019-4k-cb-1920x1080.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="usrInfo">
          <div className="left">
            <a href="">
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href="">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="">
              <PinterestIcon fontSize='large' />
            </a>

          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>NGR</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>github.com/LoganXav</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>      
    </div>
  )
}

export default Profile
