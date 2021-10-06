import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ExpenseList = () => {
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
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button type="button" className="btn btn-danger me-2 btn-sm text-white">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <button type="button" className="btn btn-danger me-2 btn-sm text-white">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>
                        <button type="button" className="btn btn-danger me-2 btn-sm text-white">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;