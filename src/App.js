import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PostViewPage from './Pages/PostViewPage/PostViewPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AddPostP from './Components/Popups/AddPostP/AddPostP';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


function App() {
  return (
        <div className="App">
          <BrowserRouter>
           <Routes>
           <Route path='/' exact element={<HomePage/>}></Route>
           <Route path='/login' exact element={<LoginPage/>}></Route>
           <Route path='/postView' exact element={<PostViewPage/>}></Route>
           <Route path='/profilePage' exact element={<ProfilePage/>}></Route>
           <Route path='/addPosts' exact element={<AddPostP/>}></Route>
           <Route path='/about' exact element={<About/>}></Route>
           <Route path='/contact' exact element={<Contact/>}></Route>

           </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
