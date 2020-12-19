import React, { Component } from 'react'
import Header from './Header.js'
import Total from './Total.js'
import History from './History.js'
import AddTransaction from './AddTransaction.js'
import '../App.css'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={transactions:[{desc:"Fee",amount:25},{desc: "Entertain",amount:100}]};
    }

    render() {
        

        return (
            <div className="main">
                <Header updateRecord={this.setState.bind(this)} record={this.state}/>
                <Total updateRecord={this.setState.bind(this)} record={this.state}/>
                <History updateRecord={this.setState.bind(this)} record={this.state}/>
                <AddTransaction updateRecord={this.setState.bind(this)} record={this.state}/>
            </div>
        )
    }
}

export default Main;

