import React,{useState,useEffect} from 'react';

//static State Commented
const Counter = (props) =>{
    //let startValue = props.startValue;
    
    //Set Dynamic State
    let [startValue,setStartValue] = useState(props.startValue);
    useEffect(()=>{
        alert('New Counter Value is: ' + startValue);
    })
    return (
        <React.Fragment>
        <span>
        {/* <button onClick={()=>startValue--}>-</button>
        <input type="number" value={startValue}/>
        <button onClick={()=>startValue--}>+</button> */}

        <button onClick={()=>setStartValue(startValue-1)}>-</button>
        <input type="number" value={startValue}/>
        <button onClick={()=>setStartValue(startValue+1)}>+</button>
        </span>
        </React.Fragment>

    )
}
export default Counter;