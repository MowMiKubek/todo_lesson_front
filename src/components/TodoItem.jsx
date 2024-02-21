const TodoItem = (props) => {
    const { todo, onToggleComplete, onDelete } = props;

    return (
        <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
            {todo.name} - {todo.category} - {todo.date} - 
            {todo.isCompleted ? 'Done' : 'Pending'}
            <button onClick={() => onToggleComplete(todo.id)}>Toggle Complete</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;