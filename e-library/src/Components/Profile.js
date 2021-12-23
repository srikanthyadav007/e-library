import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { removeUserSession, getUser } from '../Utils/Common'
import ProfileStyles from './Profile.module.css' 

import UserInfoUIComponent from './UserInfoUIComponent'

function Profile() {

  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }

  // Declare new state variable, for displaying history/fav/wishlist
  const [display, setDisplay] = useState("history");

  return (    
    
    <div className={`${ProfileStyles.bg} ${ProfileStyles.fullcover}`}>
    <h1 className={ProfileStyles.title_pen}>Hello! {user.username} </h1>
      <div className={ProfileStyles.user_profile}>
	<img className={ProfileStyles.avatar} src="https://i.ibb.co/YWzQZVd/profile-pic-logo.jpg" alt="User Profile pic" />
    <div className={ProfileStyles.username}>{user.name}</div>
  <div className={ProfileStyles.bio}>
  Bio:<input type="text" id="bio" name="bio" placeholder="Bio" />
  </div>
    <div className={ProfileStyles.description}>
    Profession:<input type="text" id="profession" name="profession" placeholder="Profession" />
  </div>
  <ul className={ProfileStyles.data}>
  <li>
  <span > <a href='/profile/fav' >FAVOURITES</a></span>
  </li>
  <li>
    <span > <a href='/profile/wish' >WISHLIST</a></span>
  </li>
  <li>
    <span > <a href='/profile/history' >HISTORY</a></span>
  </li>
  </ul>

    

  <input
     type="button"
     value="Logout"
     onClick={handleLogout} />

</div>  

</div>



     )
}

export default Profile ;


