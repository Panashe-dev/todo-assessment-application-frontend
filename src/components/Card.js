import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import EditTask from './EditTask ';
import {deleteTodoAction} from '../actions/TodoAction';


const Card = ({taskObj, index}) => {
    const [modal, setModal] = useState(false);
    const dispatch=useDispatch();

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure')) {
        dispatch(deleteTodoAction(taskObj.id))
        }
    }

    return (
        <>
       
        <div className = "card-wrapper me-5 mt-4">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.taskName}</span>
                <p className = "mt-3">Angenda: {taskObj.description}</p>
                <span className = "mt-2" >Target Date: {taskObj.targetDate} </span>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "fa fa-edit ms-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fa fa-trash ms-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle}  taskObj = {taskObj}/>
        </div>
     
        </>
    );
};

export default Card;