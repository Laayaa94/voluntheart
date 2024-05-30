import React from 'react'
import './ProfilePage.css'
import user2 from'../../assets/member-4.png'
import photo1 from'../../assets/gradu1.jpg'
import user1 from'../../assets/member-8.png'
import photo2 from'../../assets/photo1.png'
import Posts from '../../Components/Posts/Posts'
import AddPosts from '../../Components/AddPosts/AddPosts'
import NavBarPost from '../../Components/NavBarPost/NavBarPost'
import ProfilePhoto from '../../Components/ProfilePageComp/ProfilePhoto/ProfilePhoto'
import ProfileIntro from '../../Components/ProfileIntro/ProfileIntro'
const ProfilePage = () => {
  return (
    <div className='profilePage'>
      <div className="nav">
      <NavBarPost/>
      </div>
      
      <div className="profilePageContent">
      <ProfilePhoto/>
      </div>
      <div className="intoAndPostArea">
        <div className="intro">
         <ProfileIntro/>
         
        </div>
        <div className="postPartProfilePage">
          <AddPosts clasName="AddPostComponnt"/>
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
    </div>
  )
}

export default ProfilePage
