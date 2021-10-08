import React from 'react';
import { useSelector} from "react-redux"

const Tasks = () => {
const initialAmount = useSelector(store => store.tasks.initialAmount)
const costs = useSelector(store => store.tasks.costs)

    console.log(initialAmount)
    return (
        <div className="container">
            <h1 className="mt-4 h1">Your list of expenses</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card text-white mb-3 styles mt-3">
                        <div className="card-body">
                            <h3 className="card-title text-center text-dark">{initialAmount},00 $</h3>
                        </div>
                        <div className="card-footer text-center text-dark bg">Initial amount</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white mb-3 styles mt-3">
                        <div className="card-body">
                            <h3 className="card-title text-center text-dark">{costs},00 $</h3>
                        </div>
                        <div className="card-footer text-center text-dark bg-danger">Spent</div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white mb-3 styles mt-3">
                        <div className="card-body">
                            <h3 className="card-title text-center text-dark">{initialAmount - costs},00 $</h3>
                        </div>
                        <div className="card-footer text-center text-dark bg-2">Balance</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;