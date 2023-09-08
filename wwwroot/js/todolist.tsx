interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void;
}

interface Todo {
    id: number,
    task: string,
    isDone: boolean;
}

type SingleTodoProps = {
    todo: Todo,
    todoArray: Todo[],
    setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todoArray, setTodoArray }) => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.task);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodoArray(todoArray.map((todo) => todo.id == id ? { ...todo, task: editTodo } : todo));
        setEdit(false);
    }

    const handleDone = (id: number) => {
        setTodoArray(todoArray.map((todo) => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo))
    };

    const handleDelete = (id: number) => {
        setTodoArray(todoArray.filter((todo) => todo.id != id));
    }

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const inputRef = React.useRef<HTMLInputElement>(null);

    return (

        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            <span className="todos__single--text">
                {edit ? (
                    <span>
                        <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single--input" />
                        <input type="submit" value="Done" className="btn btn-primary" />
                    </span>
                ) : (
                    <span> {todo.task}</span>
                )
                }

                <span className="todos__single--iconspan">
                    <i className="fa-solid fa-pencil" onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}></i>
                    <i className="fa-solid fa-trash" onClick={() => handleDelete(todo.id)}></i>
                    <i className="fa-solid fa-check" onClick={() => handleDone(todo.id)}></i>
                </span>
            </span>
        </form >
    )
}

interface TodoArrayProps {
    todoArray: Array<Todo>,
    setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoArray: React.FC<TodoArrayProps> = ({ todoArray, setTodoArray}) => {
    return (
        <div className="container-fluid tasks-container">
            <div className="todos">
                <h4>Active Tasks</h4>
                {
                    todoArray.map((todo) => !todo.isDone ? (<SingleTodo
                        todo={todo}
                        todoArray={todoArray}
                        key={todo.id}
                        setTodoArray={setTodoArray} />) : (null))
                }

            </div>

            <div className="todos remove">
                <h4>Completed Tasks</h4>
                {
                    todoArray.map((todo) => todo.isDone ? (<SingleTodo
                        todo={todo}
                        todoArray={todoArray}
                        key={todo.id}
                        setTodoArray={setTodoArray} />) : (null))
                }

            </div>
        </div>
    );
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className='input input-group' onSubmit={handleAdd}>
            <input
                type="input"
                placeholder="Enter task."
                className="form-control input__box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="input__submit btn btn-primary">Add</button>
        </form>
    )
}

const Todolist: React.FC = () => {
    const [todo, setTodo] = React.useState<string>("");
    const [todoArray, setTodoArray] = React.useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = React.useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodoArray([...todoArray, { id: Date.now(), task: todo, isDone: false }]);
            setTodo("");
        }
    }

    return (
        <div className="container-fluid todolist">
            <h1 className="heading">To-do List</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoArray todoArray={todoArray} setTodoArray={setTodoArray} />
        </div>
    );
};

//const todolist: React.FC = () => { }

ReactDOM.render(
    <Todolist />,
    document.getElementById("content")
);