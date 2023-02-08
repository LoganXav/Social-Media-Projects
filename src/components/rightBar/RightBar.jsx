import './rightBar.scss'

const RightBar = () => {
    return ( 
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.hdqwalls.com/download/call-of-duty-black-ops-iv-dead-of-the-night-u2-1920x1080.jpg" alt="" />
                            <span>Lotex</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>ignore</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.hdqwalls.com/download/call-of-duty-modern-warfare-2-remastered-game-h3-1920x1080.jpg" alt="" />
                            <span>Broken</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>ignore</button>
                        </div>
                    </div>
                </div>
                

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.hdqwalls.com/download/battlefield-2042-wingsuit-5k-5t-1920x1080.jpg" alt="" />                                                  
                            <p>
                                <span>Mystique</span> changed their profile picture                                
                            </p>
                        </div>
                        <span>5 min ago</span>
                    </div>
                    
                
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/download/call-of-duty-black-ops-4-video-game-4k-ss-1920x1080.jpg" alt="" />                                                  
                                <p>
                                    <span>Raven</span> changed their profile picture                                
                                </p>
                            </div>
                            <span>30 min ago</span>
                    </div>
                    
                
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/download/battlefield-2042-xbox-series-x-4k-2k-1920x1080.jpg" alt="" />                                                  
                                <p>
                                    <span>Storm</span> changed their profile picture                                
                                </p>
                            </div>
                            <span>2 hours ago</span>
                    </div>
                
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.hdqwalls.com/download/call-of-duty-black-ops-3-specialist-1920x1080.jpg" alt="" />                                                  
                            <div className="online" />
                            <span>Professor</span>
                            
                        </div>
                        
                    </div>                   
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/download/call-of-duty-black-ops-4-video-game-4k-ss-1920x1080.jpg" alt="" />                                                  
                                <div className="online" />
                                <span>Raven</span>
                                
                            </div>
                            
                    </div>                  
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/download/call-of-duty-vanguard-2022-yw-1920x1080.jpg" alt="" />                                                  
                                <div className="online" />
                                <span>Magneto</span>
                                
                            </div>
                            
                    </div>
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/wallpapers/thumb/call-of-duty-black-ops-4k-2q.jpg" alt="" />                                                  
                                <div className="online" />
                                <span>Quicksilver</span>
                                
                            </div>
                            
                    </div>
                    <div className="user">
                            <div className="user-info">
                                <img src="https://images.hdqwalls.com/download/call-of-duty-mobile-4k-new-dd-1920x1080.jpg" alt="" />                                                  
                                <div className="online" />
                                <span>Havok</span>
                                
                            </div>
                            
                    </div>
                
                </div>                
            </div>
        </div>
    );
}
 
export default RightBar;