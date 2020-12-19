import React from 'react';
import '../App.css'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={record:props.record, setRecord:props.updateRecord};
    }
    calculateBalance() {
        let balance = 0;
        for(let i = 0; i < this.state.record.transactions.length; i++) {
            balance+=parseInt(this.state.record.transactions[i].amount);
        }
        return balance;
    }
    render() {
        return (
            <div className="Header">
            <h1>
                Expense Tracker
            </h1>
            <h2>
            Balance: $
            {this.calculateBalance()}
            </h2>
            </div>
            
        );
    }
}

export default Header;