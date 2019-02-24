import {delTodo, editTodo, FILTER_VALUES, handleTodo, toggleTodo} from "../Redux/actions";
import TodoList from "../components/TodoList";
import {connect} from "react-redux";



function getVisibleTodoList(todos, filter) {
    switch (filter) {
        case FILTER_VALUES.ALL:
            return todos;
        case FILTER_VALUES.ACTIVE:
            return todos.filter(todo => !todo.complete);
        case FILTER_VALUES.COMPLETED:
            return todos.filter(todo => todo.complete)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodoList(state.todoActions, state.filterTodo)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (id, text) => dispatch(handleTodo(id, text)),
        delTodo: (id) => dispatch(delTodo(id)),
        editTodo: (id) => dispatch(editTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
