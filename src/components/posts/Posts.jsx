import './posts.scss'
import Post from '../post/Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = () => {

  const { isLoading, error, data } = useQuery(["posts"], () =>      //this query manages all the data for our posts fetch. It then passes the res down as a prop to all our posts.
    makeRequest.get("/posts").then((res) => {       // this is how how mutated data gets here and is passed down as a prop to be rendered in post
      return res.data
    })
   )

   console.log(data)


  return (
    <div className='posts'>
      {error
      ? "Something went wrong!"
      : isLoading
      ? "loading"
      : data.map(post =>                      // for each data, in this case the data is each post we get back from the db, including the images(file)
        <Post post={post} key={post.id} /> 
      )}
    </div>
  )
}

export default Posts
