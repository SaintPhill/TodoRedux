import React from 'react'
import PropTypes from 'prop-types'

class TodoItemContent extends React.PureComponent {
    render() {
        const {props} = this;
        let display = props.edit ? 'none' : 'block';
        return (
            <label>
                <input
                    type="checkbox"
                    checked={props.complete}
                    onChange={props.toggleTodo.bind(null, props.id)}
                />
                <span>
                {!props.edit ? props.text :
                    <form onSubmit={props.editTodo.bind(null, props.id)}>
                        <input
                            autoFocus
                            style={{width: '200px'}}
                            value={props.text}
                            onChange={props.onChange.bind(null, props.id)}
                            onBlur={props.editTodo.bind(null, props.id)}
                        />
                    </form>}
             </span>
                <button className={'float waves-effect waves-light btn'}
                        onClick={props.delTodo.bind(null, props.id)}>delTodo
                </button>
                <button className={'float waves-effect waves-light btn'}
                        onClick={props.editTodo.bind(null, props.id)}
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