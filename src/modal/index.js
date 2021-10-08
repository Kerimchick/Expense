import React, {useState} from 'react';
import Modal from 'react-modal';
import {useDispatch} from "react-redux";
import {addUser} from "../redux/actions/userActions";

const ModalUser = () => {
    const dispatch = useDispatch()
    const [modalIsOpen, setIsOpen] = useState(true);
    const [username, setUsername] = useState("")
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(addUser(username))
        setIsOpen(false)
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <form onSubmit={handleSubmit}>
                    <h2>Greetings businessman</h2>
                    <input type="text" className="form-control" placeholder="Username"
                           aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} required/>
                    <div>
                        <button type="submit" className="btn btn-primary mt-2 d-block ms-auto">Add user</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalUser;