import React from 'react'
import HomepageStyles from './Homepage.module.css'
import SearchStyles from './Search.module.css' 
import { removeUserSession, getUser } from '../Utils/Common'
import db_books from './../api/db_books'

function Homepage() {
    let user = getUser();
    if (!user)
    {
      user={'name':""}
    }

    function compareBookReads(a, b){
      return a['reads']>b['reads']
    }

    

    return (
        <div>
              <nav>
                <div className={HomepageStyles.menu}>
          <ul>
              
              <li><a href="/" className={HomepageStyles.menu_item}>HOME</a></li>
              <li><a href="#" className={HomepageStyles.menu_item}>ABOUT</a></li>
              <li><a href="#" className={HomepageStyles.menu_item}>TOPIC</a></li>
              <li><a href="/booksform" className={HomepageStyles.menu_item}>ADD BOOKS</a></li>
              <li><a href="/profile" className={HomepageStyles.menu_item}>PROFILE</a></li>
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
        <div>
        <form action="/" className={`${SearchStyles.search_wrapper} ${SearchStyles.cf}`}>
        <input type="text" placeholder="Search here..." required="" /> 
        <button type="submit">Search</button>
        </form>
        </div>
    
        <div className={HomepageStyles.heading_text}>
         THIS IS GOING TO A BE A COLLEGE ONLINE LIBRARY
        </div>
       </div>



      {/* last x from database, as new arrivals get appended in json db */}
      <h1>New Arrivals</h1>
      <div className={HomepageStyles.cards}>
      {db_books.reverse().slice(-8).reverse().map((b)=>          
        <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src={b["img"]} height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
             By : {b["authors"][0]}
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
          </div>)}
        </div>

          
          <hr />
          
          {/* Sort based on no of reads, and display top x */}
          <h1>Popular Readings :</h1>
          <div className={HomepageStyles.cards}>
      {db_books.sort((a, b)=> a['reads']-b['reads'] ).slice(-5).reverse().map((b)=>          
        <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src={b["img"]} height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
             By : {b["authors"][0]}
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
          </div>)}
        </div>

<hr />
<br />

{/* Don't have any idea on how to make recommendations */}
     <h1>Recommandations for {user.username} : </h1>

      <div className={HomepageStyles.cards}>
          <div className={HomepageStyles.card}>
            <div className={HomepageStyles.thumbnail}>
            <img src="https://i.ibb.co/LCshFCr/Ai.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Peter Norvig
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
            <img src="https://i.ibb.co/X57PqrJ/DBMS.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : B. Navathe
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
            <img src="https://i.ibb.co/mNGK790/DM.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Pang-Ning Tan
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
            <img src="https://i.ibb.co/CWd8Hz9/NLP.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Anuj Gupta
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
            <img src="https://i.ibb.co/prbpZ4N/Data-Anlaytics.jpg" height="225px" width="205" />
            </div>
            <div className={HomepageStyles.card_text}>
              By : Robert Keane
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
    <span>9876543210</span>
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
