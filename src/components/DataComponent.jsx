const DataComponent = (props) => {
    const { data, deleteToDo } = props;

    const handleDelete = (id) => {
        deleteToDo(id)
    }

    return (
        <>
            <div className='todo-list'>
                {data.map((item) => {
                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.task}</div>
                            <i id='delete' onClick={() => handleDelete(item.id)}>
                                <img src='https://www.svgrepo.com/show/533010/trash-alt.svg' alt="delete icon" />
                            </i>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DataComponent;