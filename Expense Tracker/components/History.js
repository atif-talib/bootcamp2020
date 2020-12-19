import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);
       this.state = {list:[]};
    }
    isEmpty(){
        if(this.props.record.transactions.length>0){
            return {display:'none'};
        }
        else{
            return {display:'flex'};
        }

    }
    incomeOrExpense(paisa)
    {
        return paisa>0?"historyItems historyIncome" : "historyItems historyExpense";
    }
    incomeOrExpenseButton(paisa){
        return paisa > 0 ? "deleteBtnIncome": "deleteBtnExpense";
    }
    remove(id){
        let old = this.props.record.transactions;
        let newRec = old.splice(id,1);
        console.log(id);
        console.log(newRec);
        this.props.updateRecord(newRec);
    }
    createObjectList(){
        let list = [];
        for(var i = 0; i < this.props.record.transactions.length; i++){
            list.push(<div className={this.incomeOrExpense(this.props.record.transactions[i].amount)}>
            <span>{this.props.record.transactions[i].desc}</span>
            <span>${this.props.record.transactions[i].amount}
            <span id={`${i}`} onClick={this.remove.bind(this,i)} className={this.incomeOrExpenseButton(this.props.record.transactions[i].amount)}>X</span>
            </span>
        </div>)
        }
        return list;
    }
    render() {

        return (
            <div className="history">
            <h3>Transaction History</h3>
            <hr/>
            <span style={this.isEmpty()}>No transactions added yet!</span>
                {this.createObjectList()}
            </div>
        );
    }
}

export default History;