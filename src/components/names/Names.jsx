import user from './../../images/user.png';
import React from 'react'
import axios from 'axios'

class Names extends React.Component{
    state = {names:[], is_logge_in:false}
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log('RESPOSE', res)
            })
        console.log('RESPOSE')

    }
    handleAuthentication = () => {
        this.setState({is_logge_in: !this.state.is_logge_in})
    }
    render(){

        return(
            <div>
                <div className="row properties-pane">
                    <div className="col-6 properties-pane-left">
                       <h3>All names</h3>
                    </div>
                    <div className="col-6 properties-pane-right text-right">

                    </div>
                </div>
            </div>
        )
    }
}
export default Names