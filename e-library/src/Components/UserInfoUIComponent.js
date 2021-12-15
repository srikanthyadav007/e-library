import React, { StrictMode } from 'react'
import {connect} from "react-redux";
import store from './../store'
//import actions
import {addToFav, delFromFav, addToHistory, delFromHistory} from './../Components/userInfo/userInfoAction'

//api calls to mockdatabse
import db_books from './../api/db_books'
function getTitleFromBookId(id){
    console.log('book id: ', id)
    return db_books.find((b)=>b.id==id)
}



function UserInfoUIComponent(props) {
    //dispatcher for handling click on 'remove favoruite' button
    function remFav(book_id){
        console.log(`Remove ${book_id} form fav`)
        store.dispatch(delFromFav(book_id));
    }
    //dispatcher for handling clicking on 'delete' from history
    function handleDel(book_id, time){
        console.log(`Remove ${book_id} from user history`)
        store.dispatch(delFromHistory(book_id, time))
    }


    console.log('props:',props)
    const H = (props.display==="history")
    const F = (props.display==="fav")
    const W = (props.display==="wishlist")
    console.assert(H+F+W<=1 && "Either History/fav/wishlist on screen")

    console.log("Fav: ",F,props.info.fav)
    return (
        <div>

            {/* History Table*/}

            {H && <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Last Accessed</th>
                        <th>{props.display}</th>
                    </tr>
                </thead>

                <tbody>
                    {/* history */}
                    {props.info.history.map((b)=>(
                        <tr>
                            <td>{getTitleFromBookId(b.id).title}</td>
                            <td>{b.date}</td>
                            <td><button onClick={()=>handleDel(b.id, b.date)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>

            </table>}
            
        {/* Fav Table */}
        {F && <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Favourite</th>
                    </tr>
                </thead>

                <tbody>
                    {/* fav */}
                    {props.info.fav.map((b)=>(
                        <tr>
                            <td>{getTitleFromBookId(b).title}</td>
                            <td><button onClick={()=>remFav(b)}>Unmark fav</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            }
        {/* Wishlist Table */}
        {W && <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Wishlist</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Wishlist */}
                    {props.info.wishlist.map((b)=>(
                        <tr>
                            <td>{getTitleFromBookId(b).title}</td>
                            <td><button onClick={()=>remFav(b)}>Unmark Wishist</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            }


        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log('state:',state)
    return {
        info: state.userInfo
    }
}

export default connect(mapStateToProps)(UserInfoUIComponent)
