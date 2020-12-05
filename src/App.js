import user from './images/user.png'
import './App.css';
import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router,  Redirect, Switch, Route, Link, } from "react-router-dom";


import Main from './components/Main'

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Main/>
            </div>
        )
    }
}



export default App;
