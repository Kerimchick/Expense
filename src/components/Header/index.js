import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearListExpense} from "../../redux/actions/tasksActions";

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user.name)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h4 className="navbar-brand text-white ms-5">
                    {
                        user ? `${user}'s money` : "Unknowns money"
                    }
                </h4>
                <button className="btn btn-danger ms-auto me-4" onClick={() => dispatch(clearListExpense())}>Reset all</button>
            </nav>
        </div>
    );
};

export default Header;