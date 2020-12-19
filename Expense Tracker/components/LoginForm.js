import React,{useState, useEffect} from 'react';

//static component can't change state
const LoginForm = (props)=> { 
    let [username,setName]=useState(props.username);
    let [password,setPass]=useState(props.password);

    const clearForm = ()=> {
        setName("");
        setPass("");
    }
    useEffect(()=>{
        alert('Component Changed and Username is: ' + username +'And New Password is: ' + password);
    })
    return (
        <form>
            {/* static component can't change state
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" placeholder="Username" value={props.username} /><br/>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="Password" value={props.password} /><br/>
            <input type="submit" id="submit" name="submit" value="Login" />
            */}
            <label for="username">Username: </label>
            <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>setName(e.target.value)} value={username} /><br/>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="Password" onChange = {(e)=>setPass(e.target.value)} value={password} /><br/>
            <input type="reset" id="reset" name="reset" value="reset" onClick = {()=>clearForm()}/>
            <input type="submit" id="submit" name="submit" value="Login" />
        </form>
        );
    };
    export default LoginForm;