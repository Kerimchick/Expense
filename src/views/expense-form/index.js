import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPencilAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const ExpenseForm = () => {
    return (
        <div className="container">
            <form className="mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faCalendar} size="lg" className="mt-2" />
                                <input type="date" className="form-control width ms-2 input" id="date" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="title">Title</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faPencilAlt} size="lg" className="mt-2" />
                                <input type="text" className="form-control width ms-2 input" id="title" placeholder="title" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="amount">Amount</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faDollarSign} size="lg" className="mt-2" />
                                <input type="number" className="form-control width ms-2 input" id="amount" placeholder="0" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary ms-auto d-block me-4">Add expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;