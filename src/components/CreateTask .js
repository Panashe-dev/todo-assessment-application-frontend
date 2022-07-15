import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CreateTodo} from '../actions/TodoAction';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const CreateTaskPopup = ({modal, toggle}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(new Date());

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.createTodos);
    const {todoInfo} =todo;
    console.log(todoInfo);

    useEffect(() => {
    
      }, []);
   

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        dispatch(CreateTodo(taskName,description,targetDate))
     
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Target Date</label>
                        <DatePicker className = "form-control" selected={targetDate} onChange={(date) => setTargetDate(date)} />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;