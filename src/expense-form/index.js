import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPencilAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "react-datepicker/dist/react-datepicker.css"
import { useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addCost} from "../redux/actions/tasksActions";


const ExpenseForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {date: '', title: '', expense: ''},
        validationSchema: Yup.object({date: Yup.date().required('Enter date'),
            title:Yup.string().min(5, 'Very short text').required('Enter title'),
            expense:Yup.number().required('Enter amount')
        }),
        onSubmit: (values, {resetForm}) => {
            dispatch(addCost(values))
            resetForm({values: ""})
        },})
    return (
        <div className="container">
            <form className="mt-5" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faCalendar} size="lg" className="mt-2" />
                                <input type="date" className="form-control width ms-2 input" id="date" placeholder="date"
                                      name="date" onChange={formik.handleChange} value={formik.values.date} />
                            </div>
                            {formik.errors.date ? <div className='text-danger ms-4'>{formik.errors.date}</div> : null}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="title">Title</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faPencilAlt} size="lg" className="mt-2" />
                                <input type="text" className="form-control width ms-2 input" id="title" placeholder="title"
                                     name="title" onChange={formik.handleChange} value={formik.values.title} />
                            </div>
                            {formik.errors.title ? <div className='text-danger ms-4'>{formik.errors.title}</div> : null}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col">
                            <label htmlFor="expense">Amount</label>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faDollarSign} size="lg" className="mt-2" />
                                <input type="number" className="form-control width ms-2 input" id="expense" placeholder="0"
                                      name="expense" onChange={formik.handleChange} value={formik.values.expense}/>
                            </div>
                            {formik.errors.expense ? <div className='text-danger ms-3'>{formik.errors.expense}</div> : null}
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary ms-auto d-block me-4" type="submit">Add expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;