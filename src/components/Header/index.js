import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <h4 className="navbar-brand text-white ms-5">Igor's money</h4>
                <button className="btn btn-danger ms-auto me-4">Reset all</button>
            </nav>
        </div>
    );
};

export default Header;