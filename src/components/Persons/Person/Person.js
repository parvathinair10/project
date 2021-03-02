import React from 'react'

import  classes1 from './Person.css'





const Person = (props) =>
{
    return(
        <div className={classes1.Person}>
           <p onClick={props.click}>I'm {props.name} and I am {props.age} age old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
       </div>
            
        
    )

}
export default Person;