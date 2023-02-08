import './posts.scss'
import Post from '../post/Post'

const Posts = () => {

  

  // TEMPORARY DATA
  const posts = [
    {
      id: 1,
      name: "Logan",
      userId: 1,
      profilePic: 
      "https://images.hdqwalls.com/download/call-of-duty-modern-warfare-2019-4k-cb-1920x1080.jpg",
      desc: "Alcatraz has been off the freaking rails this new season. Everyone's holding hands now!",
      img: "https://images.hdqwalls.com/download/call-of-duty-mobile-season-12-nikto-dark-side-qa-1920x1080.jpg"
    },
    {
      id: 2,
      name: "Havok",
      userId: 2,
      profilePic: 
      "https://images.hdqwalls.com/download/call-of-duty-mobile-4k-new-dd-1920x1080.jpg",
      desc: "Manta Ray is just too sexy guys. Best skin in cod in my opinion.",
      img: "https://images.hdqwalls.com/download/cod-mobile-manta-ray-naomi-mizushima-2021-zm-1920x1080.jpg"
    }
  ]
  return (
    <div className='posts'>
      {posts.map(post =>  
        <Post post={post} key={post.id} /> 
      )}
    </div>
  )
}

export default Posts
