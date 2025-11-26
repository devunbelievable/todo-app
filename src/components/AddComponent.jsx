import { useState } from "react"

const AddComponent = (props) => {
    const { f } = props
    const [valueInput, setValueInput] = useState('Học lập trình Fullstack')
    const handleClick = () => {
        if (valueInput.trim()) {
            f(valueInput)
            setValueInput('')
        }

    }
    const handleOnChange = (event) => {
        setValueInput(event.target.value)
    }

    return (
        <>
            <div className="todo-title">Todo List</div>
            <form>
                <input type="text" value={valueInput} onChange={handleOnChange} placeholder="enter your task"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();   // tránh reload form
                            handleClick();
                        }
                    }}
                />
                <button type="button" className='btn-add' onClick={handleClick}>Add</button>
            </form>
        </>
    )
}
export default AddComponent;