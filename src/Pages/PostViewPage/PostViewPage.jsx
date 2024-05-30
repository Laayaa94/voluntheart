import NavBarPost from '../../Components/NavBarPost/NavBarPost'
import './PostViewPage.css'
import LeftPane from '../../Components/LeftPane/LeftPane'
import RightPane from '../../Components/RightPane/RightPane'
import AddPostP from '../../Components/Popups/AddPostP/AddPostP'
import { useState } from 'react'
const PostViewPage = () => {
  
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialogBox = () => {
        setIsDialogOpen(true);
    };

    const closeDialogBox = () => {
        setIsDialogOpen(false);
    };
  
  return (
    <div className="postViewPage">
      <div className="navPart">
        <NavBarPost/>
      </div>
      <div className="bottomContainer">
        <div className="leftPaneContainerPostViewPage">
        <LeftPane
        leftpaneMinus={openDialogBox}
        

        />
         <AddPostP open={isDialogOpen} onClose={closeDialogBox} />
        
        </div>
        <div className="rightPaneContainerPostViewPage">
        <RightPane/>
        </div>
      </div>
      
      
    </div>
   
  )
}

export default PostViewPage
