import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeUserSession, getUser } from '../Utils/Common'
import ProfileStyles from './Profile.module.css' 


function Profile() {

  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }

  return (
    <div className={ProfileStyles.fullcover}>
    <h1 className={ProfileStyles.title_pen}> User Profile </h1>
      <div className={ProfileStyles.user_profile}>
	<img className={ProfileStyles.avatar} src="https://i.ibb.co/51TqWNd/Whats-App-Image-2021-12-07-at-7-01-04-PM.jpg" alt="Ash" />
    <div className={ProfileStyles.username}>ROHITH HARIDASUAL</div>
  <div className={ProfileStyles.bio}>
  	Senior UI Designer
  </div>
    <div className={ProfileStyles.description}>
      I use to design websites and applications
      for the web.
  </div>
  <ul className={ProfileStyles.data}>
    <li>
      <span className={ProfileStyles.entypo_heart}> FAVOURITES</span>
    </li>
    <li>
      <span className={ProfileStyles.entypo_eye}> WISHLIST</span>
    </li>
    <li>
      <span className={ProfileStyles.entypo_user}> HISTORY</span>
    </li>
 </ul>
 <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />
</div>


</div>
     )
}

export default Profile ;


