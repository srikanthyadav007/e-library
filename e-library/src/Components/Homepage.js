import React from 'react'
import HomepageStyles from './Homepage.module.css' 


function Homepage() {
    return (
        <div>
              <nav>
      <div className={HomepageStyles.menu}>
          <ul>
              
              <li><a href="#" className={HomepageStyles.menu_item}>HOME</a></li>
              <li><a href="#" className={HomepageStyles.menu_item}>ABOUT</a></li>
              <li><a href="#" className={HomepageStyles.menu_item}>TOPIC</a></li>
              <li><a href="#" className={HomepageStyles.menu_item}>CONTACT</a></li>
              <li><a href="/dashboard" className={HomepageStyles.menu_item}>PROFILE</a></li>
              <li><a href="/login" className={HomepageStyles.menu_item}>LOGIN</a></li>
              
          </ul>
          
         
      </div>
  </nav>
  <main>
    
    <article>
      <div className={HomepageStyles.wrapper}>
        <div className={HomepageStyles.sliding_background}></div>
      </div>
      <div className={HomepageStyles.heading}>
        <p className={HomepageStyles.heading_title}>ONlib</p>
    
        <div className={HomepageStyles.heading_text}>
         THIS IS GOING TO A BE A COLLEGE ONLINE LIBRARY
        </div>
       
      </div>
      <div className={HomepageStyles.cards}>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/2Wp38Wt/DLD.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
             By : M.Morris Mano
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/LRpq8N9/OS.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Peter B.Galvin
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                100 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
              <img src="https://i.ibb.co/q9JF1T4/TOC.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Shreya Gupta
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                100 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/kSgJcQc/CD.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Jeffrey D.Ullman
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/SfmD4sT/COA.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : William Stallings
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/vLrMDyh/CN.png" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Rishabh Anand
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/SxQf2Xc/Algo.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Thomas Cormen
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/xFmY1T8/DBMS.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Henry F.Korth
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/y8JgyfP/CP.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Dennis M.Ritchie
            </div>
            <div className={HomepageStyles.card_buttons}>
              <div className={`${HomepageStyles.card_button_1} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                View
              </div>
              <div className={`${HomepageStyles.card_button_2} ${HomepageStyles.hover_effect} ${HomepageStyles.add_cursor}`}>
                FEEDBACK
              </div>
              <p className={HomepageStyles.card_bottom_text}>
                90 PAGES
              </p>
            </div>
          </div>
      </div>
    </article>
    
  </main>
  
 


  <footer>
    <div className={HomepageStyles.top_header}>
    <section>
    <span><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_map_marker}`}></i></span>
    <span> Indian Institute of information Technology,Sricity,Chittoor,Andhra Pradesh</span>
    </section>
    <section>
    <span><i className={`${HomepageStyles.fa} ${HomepageStyles.fa_phone}`}></i></span>
    <span>6301595977</span>
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
    Copyright © 2021 ONlib - All rights reserved 
    </div>
    </footer>
        </div>
    )
}

export default Homepage ;