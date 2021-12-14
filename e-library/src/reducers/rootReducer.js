import { combineReducers } from 'redux';
import userInfoReducer from '../Components/userInfo/userInfoReducer'


const rootReducer = combineReducers({userInfo: userInfoReducer});

export default rootReducer;