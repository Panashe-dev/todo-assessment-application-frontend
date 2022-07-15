import React, { useState,useEffect} from 'react';
import CreateTask from './CreateTask ';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { listTodoAction } from '../actions/TodoAction';
import { logout } from '../actions/UserAction';
import Message from './Message';
import Loader from './Loader';
import { Alert } from 'reactstrap';


    const TodoList = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const dispatch = useDispatch();
    const todoList=useSelector((state)=> state.todoListReducers)
    const {loading, error, todos}=todoList;
    const todo = useSelector((state) => state.createTodos);
    const {todoInfo,loadingCreate} =todo;
    
    const logoutHandler = () => {
      dispatch(logout());
    };
 
  useEffect(() => {
    dispatch(listTodoAction());
  }, [dispatch]);
       
    return (
      
        <>
         <div className = "header text-center">
         <div onClick={logoutHandler} class="d-flex justify-content-end"><span className='me-2'>Logout</span>
         <i className="fa fa-sign-out me-4" style = {{"font-size" : "25px"}} ></i>
         </div>
        <h3 >Todo Application</h3>
      
        <button className = "btn btn-outline-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
        </div>
        {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <div className = "task-container">
         { todos && todos.dataList.map((item,index)=>(<Card taskObj = {item}  key={item.id} index = {index}></Card>))}
        </div>
            <CreateTask toggle = {toggle} modal = {modal} />
        </>
            )}
          
        </>
    
      );
}
export default TodoList;