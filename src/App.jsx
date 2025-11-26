import './assets/css/style.css'
import AddComponent from './components/AddComponent'
import DataComponent from './components/DataComponent'
import { useState, useEffect } from 'react'
import Todo_Image from './assets/images/to-do.jpg'
const App = () => {

  const [data, setData] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  const addToDo = (name) => {
    // Using timestamp for a more unique ID
    setData([...data, { id: Date.now(), task: name }])
  }

  const deleteToDo = (id) => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  return (
    <>
      <div className="container">
        <AddComponent f={addToDo} />
        {data.length > 0 ?
          < DataComponent data={data} deleteToDo={deleteToDo} />
          :
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <img src={Todo_Image} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        }
      </div>
    </>
  )
}

export default App
