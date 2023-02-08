import { useContext } from 'react'
import './comments.scss'
import {AuthContext} from '../../context/authContext'

const Comments = () => {

    const { currentUser } = useContext(AuthContext)

    //TEMPORARY COMMENTS DATA

    const comments = [
        {
            id: 1,
            name: "Professor",
            userId: 1,
            profilePic: 
                "https://images.hdqwalls.com/download/call-of-duty-black-ops-3-specialist-1920x1080.jpg",
            desc: "We just need to stick together and play as a team"   
        },
        {
            id: 2,
            name: "Magneto",
            userId: 2,
            profilePic: 
                "https://images.hdqwalls.com/download/call-of-duty-vanguard-2022-yw-1920x1080.jpg",
            desc: "Logan, I don't know what you're going on about, I just love Nigerian music 'gimme love nwantiti'"   
        }
    ]
    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder='Write a comment...' />
                <button>Send</button>
            </div>
            {comments.map(comment => 
                <div className='comment'>
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>)}
        </div>
    )
}

export default Comments