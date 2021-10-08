import React from 'react';
import {useDispatch} from "react-redux";
import {clearListExpense} from "../../redux/actions/tasksActions";

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h4 className="navbar-brand text-white ms-5">Igor's money</h4>
                <button className="btn btn-danger ms-auto me-4" onClick={() => dispatch(clearListExpense())}>Reset all</button>
            </nav>
        </div>
    );
};

export default Header;