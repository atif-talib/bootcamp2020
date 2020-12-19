import React from 'react';


class CounterCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counterValue: props.startValue};
        console.log(props.startValue);
        console.log(this.state.counterValue);
    }
    render() {
        return (
            <React.Fragment>
                <input type="button" onClick={()=>this.setState({counterValue: this.state.counterValue+1})} value="-"/>
                <input type="text" value={this.state.counterValue}/>
                <input type="button" onClick={()=>this.setState({counterValue: this.state.counterValue+1})} value="+"/>
            </React.Fragment>
        )
    }
}

export default CounterCC;