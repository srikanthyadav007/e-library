import React, { StrictMode } from 'react'
import {connect} from "react-redux";
import store from './../store'
//import actions
import { addToHistory, delFromHistory} from './../Components/userInfo/userInfoAction'

//api calls to mockdatabse
import db_books from './../api/db_books'

function getTitleFromBookId(id){
    console.log('book id: ', id)
    return db_books.find((b)=>b.id==id)
}

function History(props) {

    //dispatcher for handling clicking on 'delete' from history
    function handleDel(book_id, time){
        console.log(`Remove ${book_id} from user history`)
        store.dispatch(delFromHistory(book_id, time))
    }


    return (
        <div>
            <table>
            <thead>
                    <tr>
                    <span style={{marginLeft:'50px'}}></span>     <th>Book Name</th><span style={{marginLeft:'50px'}}></span>
                        <th>Last Accessed</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {/* history */}
                    {props.info.history.map((b)=>(
                        <tr>
                          <span style={{marginLeft:'50px'}}></span>  <td>{getTitleFromBookId(b.id).title}</td><span style={{marginLeft:'50px'}}></span>
                            <td>{b.date}</td><span style={{marginLeft:'50px'}}></span>
                            <td><button onClick={()=>handleDel(b.id, b.date)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log('state:',state)
    return {
        info: state.userInfo
    }
}


export default connect(mapStateToProps)(History);
