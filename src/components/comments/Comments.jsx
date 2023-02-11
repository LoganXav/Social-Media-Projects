import { useContext } from 'react'
import './comments.scss'
import {AuthContext} from '../../context/authContext';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import moment from 'moment';

const Comments = ({postId}) => {              // we're taking the postId as a prop because we'll be fetching the comments according to each post

    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(["comments"], () =>      // this query manages all the data for our comments fetch. It then passes the response down as a prop to all our posts.
    makeRequest.get("/comments?postId="+postId).then((res) => {                  // call comments endpoint quering the postId to get the comments for the specific post we're looking at
    return res.data
    })
   )

   console.log(data)

    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder='Write a comment...' />
                <button>Send</button>
            </div>
            {isLoading ? "loading..." : data.map(comment =>               // renders the data from the comments call request to the end point. Next is to create end point
                <div className='comment'>
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                </div>)}
        </div>
    )
}

export default Comments