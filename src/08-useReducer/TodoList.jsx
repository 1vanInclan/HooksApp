import { Todoitem } from "./Todoitem"


export const TodoList = ({ todos = [] }) => {

    // console.log(todos.map(todo => (
    //     todo.id
    // )))

    // console.log(todos.map(todo => (
    //     todo.description
    // )))

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <Todoitem key={ todo.id } todo={todo}/>
            ))
        }             
    </ul>

  )
}
