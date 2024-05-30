import React from 'react'
import './MiddlePane.css'
import Posts from '../Posts/Posts'
import user2 from'../../assets/member-4.png'
import photo1 from'../../assets/gradu1.jpg'
import user1 from'../../assets/member-8.png'
import photo2 from'../../assets/photo1.png'
import AddPosts from '../AddPosts/AddPosts'

const MiddlePane = () => {
  return (
    <div className='middlePane'>
     <div className="rowMiddlePane">
     <AddPosts/>
     </div>
     <div className="rowMiddlePanemn">
     
     <Posts
        profile={user1}
        username="Deni Decker"
        time="5 minutes ago"
        caption="One Day You Will Win!"
        image={photo1}
     />
     <Posts
        profile={user2}
        username="Denil Decker"
        time="5 minutes ago"
        caption="Beautiful sunset today!"
        image={photo2}
     />



     </div>
    </div>
  )
}

export default MiddlePane
