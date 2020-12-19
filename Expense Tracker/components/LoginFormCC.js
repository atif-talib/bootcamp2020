import React from 'react';

class LoginFormCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            password: props.password
        }
    }
    clearForm = ()=> {
        this.setState({username:"",password:""})
    }

    componentDidMount(){

    }
    componentDidUpdate(prevProps,prevState,snap) {}
    render() {
        return (
            <form>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>this.setState({username: e.target.value})} value={this.state.username} /><br/>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="Password" onChange = {(e)=>this.setState({password: e.target.value})} value={this.state.password} /><br/>
            <input type="reset" id="reset" name="reset" value="reset" onClick = {()=>this.clearForm()}/>
            <input type="submit" id="submit" name="submit" value="Login" />
        </form>
        )
    }
}

export default LoginFormCC;