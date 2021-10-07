import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {removeFromList} from "../../redux/actions/tasksActions";

const ExpenseList = () => {
    const dispatch = useDispatch()
    const expense = useSelector(store=> store.tasks)
    return (
        <div className="container">
            <table className="table mt-5">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Price</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        expense.tasks.map((el,index) =>
                            <tr key={index}>
                                <td>{el.date}</td>
                                <td>{el.title}</td>
                                <td>{el.expense}</td>
                                <td>
                                <button type="button" className="btn btn-danger me-2 btn-sm text-white"
                                        onClick={() => dispatch(removeFromList(el))}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;