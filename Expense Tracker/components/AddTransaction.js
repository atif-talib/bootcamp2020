import React, { Component} from 'react';

class AddTransaction extends Component {
    constructor(props){
        super(props);
        this.state = {text:"", amount:0,};
    }
    clearForm(){
        this.setState({text:"", amount:0});
    }
    addRecord(){
        if(this.state.text==="")
        {
            alert("Error! Enter a valid description!");
        }
        else if(this.state.amount===0)
        {
            alert("Error! Enter a valid amount!");
        }
        else{

            let old = this.props.record.transactions;
            let newRecord = {desc:this.state.text,amount:this.state.amount};
            old.push(newRecord);
            this.props.updateRecord(old);
            this.clearForm();
        }
    }
    render() {
        return (
            <div className="add-transaction">
                <h3>Add Transaction</h3>
                <hr/>
                <label htmlFor="desc">Description:</label>
                <input type="text" id="desc" placeholder="Enter description" value={this.state.text} onChange={(e)=>this.setState({text: e.target.value})}/>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" placeholder="-ive -> expense, +ive -> income" value={this.state.amount} onChange={(e)=>this.setState({amount:e.target.value})}/>
                <button className="btn" onClick={this.addRecord.bind(this)}>Add</button>
            </div>
        );
    }
}

export default AddTransaction;