import React from "react";
import TodoList from "./Components/TodoList";
import {delTodo, addTodo, filterTodo, toggleTodo, editTodo, handleTodo, FILTER_VALUES} from "./Redux/Actions";
import store from "./index";
import NavBar from "./Components/NavBar";
import {connect} from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.ref = React.createRef();
        this.searchInputRef = React.createRef();
    }

    addTodo = e => {
        e.preventDefault();
        const text = this.ref.current.value;
        if (text !== '') {
            this.ref.current.value = '';
            store.dispatch(addTodo(text));
        } else alert('Please enter text')
    };
    toggleTodo = (i) => {
        store.dispatch(toggleTodo(i))
    };

    setFilter = e => {
        store.dispatch(filterTodo(e))
    };

    delTodo = i => {
        store.dispatch(delTodo(i))
    };
    editTodo = i => {
        store.dispatch(editTodo(i));
    };
    handleTodoChanges = (index, e) => {
        store.dispatch(handleTodo(index, e.target.value));
    };
    handleInputChanges = () => {
        this.setState({
            searchString: this.searchInputRef.current.value
        })
    };


    render() {
        const {todos, filter} = this.props;
        let out = todos.filter(todo => todo.text.includes(this.state.searchString.toLowerCase())).filter(todo => {
            switch (filter) {
                case FILTER_VALUES.ALL:
                    return true;
                case FILTER_VALUES.COMPLETED:
                    return todo.complete;
                case FILTER_VALUES.ACTIVE:
                    return !todo.complete;
                default:
                    return true;
            }
        });
        return (
            <div className='container' style={{width: '50%'}}>
                <NavBar onCLick={this.setFilter}/>
                <TodoList
                    todos={out}
                    toggleTodo={this.toggleTodo}
                    delTodo={this.delTodo}
                    editTodo={this.editTodo}
                    onChange={this.handleTodoChanges}/>
                <form onSubmit={this.addTodo}>
                    <input ref={this.ref} placeholder='add your todo...'/>
                </form>
                {
                    todos.length > 1 && <input ref={this.searchInputRef}
                                               placeholder='filter' value={this.state.searchString}
                                               onChange={this.handleInputChanges}/>
                }
            </div>
        )

    }
}

function initMapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

export default connect(initMapStateToProps)(App)