import {filterTodo} from "../Redux/actions";
import NavBar from "../components/NavBar";
import {connect} from "react-redux";


const mapDispatchToProps = dispatch => {
    return {
        onClick: (filter) => dispatch(filterTodo(filter))
    }
};

const StateBar = connect(null, mapDispatchToProps)(NavBar);

export default StateBar;