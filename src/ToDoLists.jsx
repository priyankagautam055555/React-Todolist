import React from "react";
const ToDoLists = (props) => { 
    return (<>
        <div className="todoinput">
            <button className="todorightborder crBTN"
                onClick={() => { 
                    props.onselect(props.id)
                }}>+</button>
            <div>{props.text}</div></div>
        
    </>)
    
}
export default ToDoLists;