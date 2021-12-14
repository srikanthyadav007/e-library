import { userData } from "../../api/db_user_data"
import * as actionTypes from './userInfoTypes'
// Reducers
// Functions taking in (state, action)
// and return new state

//define initial state object
//set initial state based on user logged
const initialState = {
    history: userData[0].history,
    fav: userData[0].fav,
    wishlist: userData[0].wishlist,
    cnt: 0
}

// TODO: make changes in database too!
// TODO: all operations should happen for particular user
const userInfoReducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_FAV:
            return {
                ...state,
                fav: [...state.fav, action.payload.id],
                cnt: state.cnt+1
            }
        case actionTypes.DEL_FROM_FAV:
            console.log('doing reducer action to remove ',action.payload.id, ' from fav')
            return {
                ...state,
                fav: state.fav.filter((f)=> f !== action.payload.id),
                cnt: state.cnt + 1
            }
        case actionTypes.ADD_TO_HISTORY:
            return {
                ...state,
                history: [state.history, {id:action.payload.id, time:action.payload.time}]
            }
        case actionTypes.DEL_FROM_HISTORY:
            console.log(`Deleting ${action.payload.id, action.payload.time} from history`)
            return {
                ...state,
                history: state.history.filter((h)=> h.date!==action.payload.time)
            }
        default:
            return state
    }
}

export default userInfoReducer;