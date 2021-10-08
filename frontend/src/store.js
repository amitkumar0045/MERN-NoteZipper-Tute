import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './redux-reducers/userReducers';

const reducer = combineReducers({
    //this will contain our reducers
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

// const initialState = {};
// fentching userState from localStorage so that whenever user come back it should fetch all the stuff from local storage

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    // applyMiddleware(...middleware),
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;