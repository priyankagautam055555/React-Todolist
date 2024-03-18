import React, { useState } from "react";
import ToDoLists from './ToDoLists';
const Todolist = () => { 
    const [curvalue, setvalue] = useState("");
    const [Item, setItem] = useState([]);
    const itemEvent = (event) => { 
        setvalue(event.target.value);
        
    }
    const btncl = () => { 
        setItem((oldvalue) => {
            return [...oldvalue, curvalue];
        });
        setvalue("");
    }
    const delected = (id) => { 
        setItem((oldvalue) => { 
            return oldvalue.filter((currvalue,index) => { 
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="todocontain">
                <h1>ToDo List</h1>
                <div className="todoinput">
                    <input type="text" placeholder="Add Item" value={curvalue} onChange={itemEvent}/>
                    <div className="todorightborder"><button onClick={btncl}>+</button></div>
            </div>
                <ol>
                    {/*<li>{curvalue}</li>*/}
                    {Item.map((Itemvalue,Index) => {//call empty array
                        return <ToDoLists
                            text={Itemvalue}
                            key={Index}
                            id={Index}
                            onselect={delected}
                            />
                     })}
            </ol>
            </div>
        </>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
export default Todolist;