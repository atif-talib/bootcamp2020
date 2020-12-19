import '../App.css'
import React, { Component } from 'react';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state={record:props.record, setRecord:props.updateRecord};
    }
    Income(){
        let income = 0;
        for(let i =0;i<this.state.record.transactions.length;i++){
            if(this.state.record.transactions[i].amount>=0)
            income += parseInt(this.state.record.transactions[i].amount);
        }
        return income;
    }
    Expense(){
        let expense = 0;
        for(let i =0;i<this.state.record.transactions.length;i++){
            if(this.state.record.transactions[i].amount<0)
            expense += parseInt(this.state.record.transactions[i].amount);
        }
        return expense;
    }
    render() {
        return (
            <div className="total">
                <div className="income">
                    Income
                </div>
                <div className="total-amount">
                $
                {this.Income()}
                </div>
                <div className="expense">
                    Expense
                </div>
                <div className="total-amount">
                $
                {this.Expense()}
                </div>
            </div>
        );
    }
}

export default Total;