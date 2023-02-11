import "./post.scss";
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";



const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    // TEMPORARY STATE
    const liked = false;

    return ( 
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>                                  
                                <span className="date">{moment(post.createdAt).fromNow()}</span>  
                        </div>                      

                    </div>
                    <MoreHorizOutlinedIcon />
                </div>           
                                  {/* we've asked the image to be taken from our local upload folder because we asked our multer to store it there*/}
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/"+post.img} alt="" />  
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        12 Comments
                    </div>    
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>    
                </div>
                {commentOpen && <Comments postId={post.id}/>}        
            </div>
        </div>
     );
}
 
export default Post;