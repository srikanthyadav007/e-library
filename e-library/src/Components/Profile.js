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
	<img className={ProfileStyles.avatar} src="https://i.ibb.co/51TqWNd/Whats-App-Image-2021-12-07-at-7-01-04-PM.jpg" alt="User Profile pic" />
    <div className={ProfileStyles.username}>{user.name}</div>
  <div className={ProfileStyles.bio}>
  	Bio
  </div>
    <div className={ProfileStyles.description}>
    Profession
  </div>
  <ul className={ProfileStyles.data}>
    <li>
      <span onClick={()=>setDisplay("fav")} > FAVOURITES</span>
    </li>
    <li>
      <span onClick={()=>setDisplay("wishlist")}> WISHLIST</span>
    </li>
    <li>
      <span onClick={()=>setDisplay("history")}> HISTORY</span>
    </li>
  </ul>
       
  <input
     type="button"
     value="Logout"
     onClick={handleLogout} />

</div>

{/* TODO: paginate this list component */}
<UserInfoUIComponent display={display}/> 

</div>
     )
}

export default Profile ;


