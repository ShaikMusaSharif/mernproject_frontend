import React from 'react';
import './Sidebar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { currentUser } = auth;

    return (
        <div>
            <ul className='sidebar'>
                <li className='list-item'><h5>{currentUser.username}</h5></li>
                <li className="list-item">
                    <Link to='/dashboard'>You are welcome to the Dashboard</Link>
                </li>
                {/* Introduce task-management-related quotes below the welcoming message */}

                <div className="quote-container">
                    <p className="quote">"Efficiency is doing things right; effectiveness is doing the right things."</p>
                    <p className="author">- Peter Drucker</p>
                </div>

                <div className="quote-container">
                    <p className="quote">"You may delay, but time will not."</p>
                    <p className="author">- Benjamin Franklin</p>
                </div>

                <div className="quote-container">
                    <p className="quote">"The best way to predict the future is to create it."</p>
                    <p className="author">- Peter Drucker</p>
                </div>

            </ul>
        </div>
    );
};

export default Sidebar;
