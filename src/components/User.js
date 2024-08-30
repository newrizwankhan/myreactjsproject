import { useState } from "react";


const User = (props)=>{

    const [count ,setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    return(
        <div className="user-card">
            <h2>Count: = {count}</h2>
            <button onClick={()=>{
                setCount(count+1)
                // setCount2(count2+1)
            }}>Count Increase</button>
            <h2>count2: = {count2}</h2>
            <button onClick={()=>{
                // setCount(count+1)
                setCount2(count2+1)
            }}>Count Increase2</button>
            <h2>Name: {props.name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact:@rizwankhanpathan</h4>
        </div>
    )
}

export default User;