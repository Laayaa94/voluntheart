import React from 'react'
import './Posts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-regular-svg-icons'

const Posts = ({ profile, username, time, caption, image }) => {
  const iconColor="#0cac74";
 
  return (
      <div className="postContainer">

<div className="postTop">
  <img src={profile} alt="" className='Profile'/>
  <span className="postUserName">{username}</span>
  <span className="postTime">{time}</span>
</div>

<div className="postCenter">
  <div className="postCaption">
    <p>{caption}</p>
  </div>

  <div className="centerPostImage">
    <img src={image} alt="" />
  </div>
  </div>

<div className="postBottom">
  <div className="reactIcons">
    <div className="responseHeart">
      <FontAwesomeIcon icon={faHeart} style={{color: iconColor}} className="postIcons"/ >
      <span className="spanCounter">225</span><span className="CounterText"> Responses </span>
    </div>
    <div className="responseCommentPart">
      <FontAwesomeIcon icon={faComment} className="postIcons"/>
      <span className='spanCounter'>115</span><span className="CounterText">Comments</span>
    </div>
    <div className="responseSharePart">
      <FontAwesomeIcon icon={faShare} className="postIcons"/>
      <span className='spanCounter'>2</span><span className="CounterText">shares</span>
    </div>
  </div>
  <hr />
  <div className="beloWContainer">
    <div className="reacts">
      <FontAwesomeIcon icon={faHeart} style={{color: iconColor}} className="ReactIcons"/ >
      <span className='reactSpan'>Love</span>
    </div>
    <div className="commentMiddle">
      <FontAwesomeIcon icon={faComment} className="ReactIcons"/>
      <span className='reactSpan'>Comment</span>
    </div>
    <div className="chat">
      <FontAwesomeIcon icon={faShareNodes} className="ReactIcons"/>
      <span className='reactSpan'>Chat</span>
    </div>
    <div className="share">
      <FontAwesomeIcon icon={faShare} className="ReactIcons"/>
      <span className='reactSpan'>Share</span>
    </div>
  </div>
</div>
</div>

    
    
  )
}

export default Posts
