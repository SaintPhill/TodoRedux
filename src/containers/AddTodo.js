import {addTodo, FILTER_VALUES} from "../Redux/actions";
import Footer from "../components/Footer";
import {connect} from "react-redux";



function getVisibleTodoList(todos, filter) {
    switch (filter) {
        case FILTER_VALUES.ALL:
            return todos;
        case FILTER_VALUES.ACTIVE:
            return todos.filter(todo => !todo.complete);
        case FILTER_VALUES.COMPLETED:
            return todos.filter(todo => todo.complete);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodoList(state.todoActions, state.filterTodo)
    }
};

const mapDispatchToProps = dispatch => {
  return {
      addTodo: (e) => dispatch(addTodo(e))
  }
};

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default AddTodo