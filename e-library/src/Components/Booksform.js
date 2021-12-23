import React from 'react'
import BooksformStyles from './Booksform.module.css'

function Booksform() {
    return (
            <div>
            <h1>Add BOOK</h1><br />
            <div className={BooksformStyles.container}>
            
            <form action="" id="contact" method="POST">
                
                <label for="title">Book Title :  </label> <br/>
                <textarea  id="title" name="title" placeholder="Name of the BOOK" rows="3" cols="50"> </textarea> <br /><br />
                
                <label for="authors">Authors :  </label>
                <textarea  id="authors" name="authors" placeholder="Author name" rows="3" cols="50"> </textarea> <br /><br />
                
                <label for="image">Book Image :  </label>
                <input type="file" name="image" id="image" accept="image/*" /> <br /><br />

                <label for="file">PDF file :  </label>
                <input type="file" name="file" id="file" /><br /><br />

                <br /><br />
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>

                

            </form>
            </div>
            </div>
    )
}

export default Booksform
