import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { login } from '../actions/UserAction';
import { Button} from 'reactstrap';
import {Message} from './Message';
import FullPageLoader from './FullPageLoader';
import { useNavigate } from 'react-router';

const loginScreen=(props)=>{
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch=useDispatch();
    const userLogin=useSelector((state)=> state.userLoginReducers);
    const { loading, error, userInfo } = userLogin;
    const navigate=useNavigate();
    
    useEffect(() => {
        if (userInfo) {
           navigate("/home")
        }
      }, [props.history, userInfo]);


      const loginSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(login(userNameOrEmail, password));
      };
    

    let index=5;
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

    return (
     <>
     <div className = "header text-center">
        <h3>Todo Application</h3>
        {error && <Message variant='danger'>{JSON.stringify(error)}</Message>}
    </div>
    <div className='d-flex justify-content-center mt-4' >
  
    <div className = "card-wrapper-2 me-5 mt-4">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": colors[index%5].secondaryColor, "borderRadius": "10px"}}>Login</span>
                {loading && <FullPageLoader></FullPageLoader>}
                <div className = "form-group">
                        <label>Username :</label>
                        <input type="text" className = "form-control"
                        placeholder='Username or Email'
                        value={userNameOrEmail}
                        onChange={(e) => setUserNameOrEmail(e.target.value)}
                        />
                </div>
                <div className = "form-group">
                        <label>Password :</label>
                        <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className = "form-control"/>
                </div>
                <Button onClick={loginSubmitHandler} className='mt-3' color="primary" >sign in</Button>{' '}
        </div>
    </div>
    </div>

    </>
    );
}
export default loginScreen;