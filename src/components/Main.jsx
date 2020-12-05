import user from './../images/user.png';
import React from 'react'
import axios from 'axios'
import {Redirect, Route, Switch, Router} from 'react-router-dom'

//----Components------
import Routes from './../routes/Routes'
import Names from './names/Names'


class Main extends React.Component{
    state = {names:[], is_logged_in:false}
    componentDidMount() {
        axios.get(`https://www.namespy.dev/#/`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log('RESPOSE', res)
            })

    }
    handleAuthentication = () => {
        alert('skks')
        this.setState({is_logged_in: !this.state.is_logged_in})
    }

    render(){
        return(
            <div>
                <header className="App-header">
                   <div className="row">
                       <div className="col-6">
                           Namespy
                       </div>
                       <div className="col-6 text-right ">
                         <img src={user} style={{width:'30px'}}/>
                       </div>
                   </div>
                </header>
                <div className="text-center body-main">
                    <div>Welcome to Namespy Client App</div>
                    <div className="sub-text">Kindly check if your name has been logged</div>
                </div>
                <div >
                   L
                </div>

            </div>
        )
    }
}
export default Main