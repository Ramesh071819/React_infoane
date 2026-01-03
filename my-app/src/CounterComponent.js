import React, { useEffect, useState } from "react";
import Timer from "./Timer";    

const Counter = (props) => {
   const [count, setCount] = useState(props.start);
    useEffect(() => {
        alert(`Counter updated to ${count}`);
    },[count === 20])
    return (
        <div>
            <span> Display Counter value: {count} </span>
            {count !== 20 &&  
                <button onClick={() => {
                        setCount(count + 1)}
                        }> Update counter
                </button> 
                
            }
           
                <Timer />
            
           
            
        </div>
    );
};

export default Counter;