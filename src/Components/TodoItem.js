import React from "react";
import PropTypes from 'prop-types'

class TodoItem extends React.PureComponent {
    render() {
        return (
            <a href='#!' className='collection-item'>
                {this.props.children}
            </a>
        )
    }

};

TodoItem.propTypes = {
    children: PropTypes.node.isRequired
};

export default TodoItem