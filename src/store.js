import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {createTodo,todoListReducer,todoUpdateReducer,todoDeleteReducer} from './reducers/TodoReducer';
import { userLoginReducer} from './reducers/userReducer';



const appReducer = combineReducers({
createTodos: createTodo,
todoListReducers: todoListReducer,
todoUpdateReducers: todoUpdateReducer,
todoDeleteReducers: todoDeleteReducer,
userLoginReducers: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
  };

  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      console.log('Logout Root Reducer');
      state = undefined;
    }
    return appReducer(state, action);
  };

const middleware = [thunk];
const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;