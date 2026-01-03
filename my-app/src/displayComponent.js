import React from 'react'
import Prop1 from "./prop1";
import Prop2 from "./prop2";
import CounterComponent from './CounterComponent';

const DisplayComponent = (prop) => {
    return(
        <div>
            <Prop2 name ={prop.name}/> 
            <Prop1 name = {prop.test}/>
            <CounterComponent start = {1}/>
        </div>
    )
}
export default DisplayComponent
