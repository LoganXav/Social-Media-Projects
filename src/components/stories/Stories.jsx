import { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import './stories.scss'

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    // TEMPORARY STORIES OBJECTS
    const stories = [
        {
            id: 1,
            name: "Professor",
            img: "https://images.hdqwalls.com/download/call-of-duty-black-ops-3-specialist-1920x1080.jpg" 
        },
        {
            id: 2,
            name: "Magneto",
            img: "https://images.hdqwalls.com/download/call-of-duty-vanguard-2022-yw-1920x1080.jpg" 
        },
        {
            id: 3,
            name: "Havok",
            img: "https://images.hdqwalls.com/download/call-of-duty-mobile-4k-new-dd-1920x1080.jpg" 
        },
        {
            id: 4,
            name: "Phoenix",
            img: "https://images.hdqwalls.com/download/call-of-duty-black-ops-battery-4k-p0-1920x1080.jpg" 
        },
        {
            id: 5,
            name: "Quicksilver",
            img: "https://images.hdqwalls.com/wallpapers/thumb/call-of-duty-black-ops-4k-2q.jpg" 
        },
    ]
  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map(story => (
            <div className="story"  key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
export default Stories
