import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'
import PropTypes from 'prop-types'
import TodoItemContent from "./TodoItemContent";

class TodoList extends React.PureComponent {
    render() {
        return (
            <div className='collection'>
                <div className="collection-header"><h4>Todo List</h4></div>
                {this.props.todos.map(el => {
                    return (
                        <TodoItem key={el.id}>
                            <TodoItemContent
                                {...el}
                                onChange={this.props.onChange}
                                delTodo={this.props.delTodo}
                                editTodo={this.props.editTodo}
                                toggleTodo={this.props.toggleTodo}/>
                        </TodoItem>
                    )
                })}
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
};


export default TodoList;