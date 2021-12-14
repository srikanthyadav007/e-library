import * as actionTypes from './userInfoTypes'
// favoruite a book
export const addToFav = (book_id)=>{
    return {
        type: actionTypes.ADD_TO_FAV,
        payload: {
            id: book_id
        }
    }
}
// un-favoruite a book
export const delFromFav = (book_id)=>{
    return {
        type: actionTypes.DEL_FROM_FAV,
        payload: {
            id: book_id
        }
    }
}

// add new book to history of books visited/read
export const addToHistory = (book_id, time)=>{
    return {
        type: actionTypes.ADD_TO_HISTORY,
        payload: {
            id: book_id,
            time: time
        }
    }
}
// delete a book from history
export const delFromHistory = (book_id, time)=>{
    return {
        type: actionTypes.DEL_FROM_HISTORY,
        payload: {
            id: book_id,
            time: time
        }
    }
}
// delete all books from history
export const delEntireHistory = ()=>{
    return {
        type: actionTypes.DEL_ALL_HISTORY
    }
}
