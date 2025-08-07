import {useState} from 'react'

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
    <div>
        <input type="text" placeholder="Enter todo" onChange={function(a){
            setTitle(a.target.value);
        }} ></input><br />



        <input type="text" placeholder="Enter Description" onChange={function(a){
            setDescription(a.target.value);
        }} ></input><br />


        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title: title,
                    description: description,
                    completed:  false
                }),
                headers: {
                        "Content-Type": "application/json"
                }
            })
        }}>Add Todo</button>

    </div>
    )
    }

// we can also do module.exports = CreateTodo; // if we want to export this component in a different way