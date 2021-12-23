import History from './History';
import Favourites from './Favourites';
import WishList from './WishList';
import React from 'react';
import HomepageStyles from './Homepage.module.css'

function UserInfoUIComponent(props) {
    


    console.log('props:',props)
    const H = (props.display==="history")
    const F = (props.display==="fav")
    const W = (props.display==="wishlist")
    console.assert(H+F+W<=1 && "Either History/fav/wishlist on screen")

    
    return (
        <div>

        {/* History Table*/}

        {H && <div id={`${HomepageStyles.pagecontainer}`}>
        
        <ul>
        <li style={{color:'white',padding:'10px',backgroundColor:'black'}} className={HomepageStyles.menu_item}>HISTORY</li>
        </ul>
        
        <History > </History> </div>}
            
        {/* Fav Table */}

        {F && <div id={`${HomepageStyles.pagecontainer}`}>

        <ul>
        <li style={{color:'white',padding:'10px',backgroundColor:'black'}} className={HomepageStyles.menu_item}>MY FAVOURITES</li>
        </ul>  
         <Favourites > </Favourites> 
         </div> }
        {/* Wishlist Table */}

        {W && <div id={`${HomepageStyles.pagecontainer}`}>
        
        <ul>
        <li style={{color:'white',padding:'10px',backgroundColor:'black'}} className={HomepageStyles.menu_item}>MY WISH LIST</li>
        </ul>
            <WishList> </WishList>
            </div>
         }

        <footer id={`${HomepageStyles.footer}`}>
    <div className={HomepageStyles.top_header}>
    <section>
    <span><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_map_marker}`}></i></span>
    <span> Indian Institute of information Technology,Sricity,Chittoor,Andhra Pradesh</span>
    </section>
    <section>
    <span><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_phone}`}></i></span>
    <span>📞 Mobile Number</span>
    </section>
    <section>
    <span><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_envelope}`}></i></span>
    <span>onlinelibrary@gmail.com</span>
    </section>
    </div>
    <span className={HomepageStyles.border_shape}></span>
    <div className={HomepageStyles.bottom_content}>
    <section>
    <a href="#"><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_facebook}`}></i></a>
    <a href="#"><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_instagram}`}></i></a>
    <a href="#"><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_twitter}`}></i></a>
    <a href="#"><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_telegram}`}></i></a>
    </section>
    <section>
    <a href="#">Home</a>
    <a href="#">About us</a>
    <a href="#">Feedback</a>
    <a href="#">Support</a>
    <a href="#">Help</a>
    <a href="#">Contact Us</a>
    </section>
    </div>
    <div className={HomepageStyles.copyright}>
    Copyright © 2022 ONlib - All rights reserved 
    </div>
    </footer>


        </div>
    )
}

export default UserInfoUIComponent;
