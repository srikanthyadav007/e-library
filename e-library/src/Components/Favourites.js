import React, { StrictMode } from 'react'
import {connect} from "react-redux";
import store from './../store'
//import actions
import {addToFav, delFromFav} from './../Components/userInfo/userInfoAction'

//api calls to mockdatabse
import db_books from './../api/db_books'

function getTitleFromBookId(id){
    console.log('book id: ', id)
    return db_books.find((b)=>b.id==id)
}

function Favourites(props) {
     //dispatcher for handling click on 'remove favoruite' button
    function remFav(book_id){
        console.log(`Remove ${book_id} form fav`)
        store.dispatch(delFromFav(book_id));
    }

    return (
        <div>
             <thead>
                    <tr>
                    <span style={{marginLeft:'50px'}}></span> <th>Book Name</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {/* fav */}
                    {props.info.fav.map((b)=>(
                        <tr>
                           <span style={{marginLeft:'50px'}}></span> <td>{getTitleFromBookId(b).title}</td><span style={{marginLeft:'50px'}}></span>
                            <td><button onClick={()=>remFav(b)}>Unmark fav</button></td>
                        </tr>
                    ))}
                </tbody>


        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log('state:',state)
    return {
        info: state.userInfo
    }
}

export default connect(mapStateToProps)(Favourites);
