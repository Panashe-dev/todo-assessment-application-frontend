import React, { useState , useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";
import {todoUpdateAction} from '../actions/TodoAction';


const EditTaskPopup  = ({modal, toggle, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(new Date());
    const dispatch=useDispatch();


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    
    }

    useEffect(() => {
        setTaskName(taskObj.taskName)
        setDescription(taskObj.description)
        setTargetDate(taskObj.targetDate)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let id=taskObj.id;
        dispatch(todoUpdateAction(taskName,description,targetDate,id))
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    {/* <div className = "form-group">
                        <label>Target Date</label>
                        <DatePicker className = "form-control" value={targetDate}  selected={targetDate} onChange={(date) => setTargetDate(date)} name="targetDate" />
                    </div>  */}
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup  ;