import React from 'react'
import PropTypes from 'prop-types'

class TodoItemContent extends React.PureComponent {

    render() {
        const todo = this.props;
        let display = todo.edit ? 'none' : 'block';
        return (
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={this.props.toggleTodo.bind(null, todo.id)}
                />
                <span>
                {!todo.edit ? todo.text :
                    <form onSubmit={this.props.editTodo.bind(null, todo.id)}>
                        <input
                            ref={el => this.ref = el}
                            autoFocus
                            style={{width: '200px'}}
                            value={todo.text}
                            onChange={ () => this.props.onChange(todo.id, this.ref.value) }
                            onBlur={this.props.editTodo.bind(null, todo.id)}
                        />
                    </form>}
             </span>
                <button className={'float waves-effect waves-light btn'}
                        onClick={todo.delTodo.bind(null, todo.id)}>delTodo
                </button>
                <button className={'float waves-effect waves-light btn'}
                        onClick={this.props.editTodo.bind(null, todo.id)}
                        style={{display: display}}>editTodo
                </button>
            </label>
        )
    }

};

TodoItemContent.propTypes = {
    complete: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItemContent