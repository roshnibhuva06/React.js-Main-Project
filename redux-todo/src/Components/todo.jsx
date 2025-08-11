
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Addtodo, Remove, Updatetodo } from "../Features/todoSlice"

const Input = () => {

    const [TextInput, setTextInput] = useState("");
    const [EditId, setEditId] = useState(null)
    const disptach = useDispatch()
    const Todos = useSelector(state => state.Todos)

    const handleAddorEdit = () => {
        if (!TextInput.trim()) return;

        if (EditId) {
            disptach(Updatetodo({ id: EditId, text: TextInput }));
            setEditId(null);
        } else {
            disptach(Addtodo(TextInput));
        }
        setTextInput("");

    };
    return (
        <div className="contain">
            <h1>Todo App</h1>
            <div className="input-contain">
                <input type="text" value={TextInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Add todo " />
                <button onClick={handleAddorEdit}> {EditId ? "Update" : "Add"}</button>
            </div>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id}> {todo.text}
                        <button onClick={() => disptach(Remove(todo.id))} className="delete">Delete </button>
                        <button className="Edit-btn" onClick={() => {
                            setTextInput(todo.text);
                            setEditId(todo.id);
                        }}>Edit </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Input
