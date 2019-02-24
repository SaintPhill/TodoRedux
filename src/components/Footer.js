import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({todos, addTodo}) => {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(e.target.children[0].value);
                e.target.children[0].value = ''
            }}>
                <input placeholder='add your todo...'/>
                {
                    todos.length > 1 && <input placeholder='filter' />
                }
                <button style={{display: 'none'}}>add</button>
            </form>
        </>
    )

};


Footer.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired
};

export default Footer