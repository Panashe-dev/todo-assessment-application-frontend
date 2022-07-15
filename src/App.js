import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import TodoList from './components/TodoList'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  
  return (
    <BrowserRouter history={history}>
    <div className="App">
    <Routes>
    <Route path="/home" element={<TodoList/>}></Route>
    <Route path="/login" element={<Login props={history} />}></Route>
    </Routes>

  </div>
  </BrowserRouter>
  );
}

export default App;
