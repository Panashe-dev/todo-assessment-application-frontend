import
 {
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_CREATE_RESET,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_UPDATE_RESET,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAIL

} from '../constants/TodoConstants';
import { postTodoApi,getAllTodoApi,todoUpdateApi,deleteTodoApi } from '../services/RestApiCalls';
import { getErrorMessage } from '../services/Utils';
  
export const CreateTodo = (taskName,description,targetDate) => async (dispatch) => {
try{

  dispatch({
    type: TODO_CREATE_REQUEST
  })

//create todo
const todoObj={
createdBy:"Panashe Mugomba",
taskName,
description,
lastModifiedBy:"",
targetDate: targetDate,

}
//create todo
let todoResponse= await postTodoApi(todoObj);
alert("Todo successfully added,refresh page")
dispatch({
  type:TODO_CREATE_SUCCESS,
  payload:todoResponse
})

}catch(error){
  dispatch({
    type:TODO_CREATE_FAIL,
    payload: getErrorMessage(error)
  })
}
  };

  //get Todo List
  export const listTodoAction = () => async (dispatch) => {
    try {
      dispatch({
        type: TODO_LIST_REQUEST
      });
  
      //list  todo
      const listTotoResponse = await getAllTodoApi();
  
      dispatch({
        type: TODO_LIST_SUCCESS,
        payload: listTotoResponse
      });
   
    } catch (error) {
      dispatch({
        type:TODO_LIST_FAIL,
        payload: getErrorMessage(error)
      });
    }
  };

  export const todoUpdateAction=(taskName,description,targetDate,id)=>async(dispatch)=>{
    try{
      dispatch({
        type:TODO_UPDATE_REQUEST
      })

      const todoUpdateObj={
        createdBy: "",
        description: description,
        id: id,
        lastModifiedBy: "system",
        targetDate: "2022-07-14T20:46:57.329Z",
        taskName: taskName
       }

       console.log(todoUpdateObj)
       await todoUpdateApi(todoUpdateObj);

       alert("Todo successfully updated, refresh page")
       dispatch({
        type:TODO_UPDATE_SUCCESS
       })
      
       dispatch({
        type:TODO_UPDATE_SUCCESS
       })

       dispatch({
        type:TODO_UPDATE_RESET
       })

    }catch(error){
      dispatch({
        type: TODO_UPDATE_FAIL,
        payload: getErrorMessage(error)
      });
    }
     
  }

  export const deleteTodoAction = (todoId) => async (dispatch) => {
    try {
      dispatch({
        type: TODO_DELETE_REQUEST
      });

  
      //Delete Todo
      await deleteTodoApi(todoId);
      alert("Todo successfully deleted, refresh page")
      dispatch({ type: TODO_DELETE_SUCCESS});
    } catch (error) {
      dispatch({
        type: TODO_DELETE_FAIL,
        payload: getErrorMessage(error)
      });
    }
  };
  