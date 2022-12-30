import React, { Component} from "react";
import { getTodoItems } from "./services/todoService";
import TodoDate from "./TodoDate";
import "./TodoItem.css";

import 'bootstrap/dist/css/bootstrap.css';

class TodoItems extends Component {
  state = {
    todos: getTodoItems(),
  };

  handleDelete = (item) => {
    console.log(item);
    console.log("handle delete called...");
    const todos = this.state.todos.filter((t) => t.id !== item.id);
    this.setState({ todos });
  };
  render() {
    return (<table className="table table-striped">
        <thead className="d-flex">

        </thead>
     <tbody>
        {this.state.todos.map((item) => (
          <tr key={item.id}><td>
            <div className="todo-item__description">
              <TodoDate date={item.date} />

              <h2>{item.task}</h2>
              <button
                onClick={() => this.handleDelete(item)}
                className="btn btn-danger btn-sm p-2 flex-shrink-1">
                Delete
              </button>
            </div>
            </td>

          </tr>
        ))}
       
       </tbody>
      </table>
    );
  }
}
export default TodoItems;
