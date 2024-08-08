import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faUsers, faEdit, faInfo, faEnvelope, faSyncAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const AdminNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sideBar" >
            <div className={`admin-sidebar ${isOpen ? 'open' : ''}`} id='morph' style={{ height: '3.5in' }}>
                <button className={`toggle-btn ${isOpen ? 'open' : 'close'}`} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faPlus} />
                </button>
                <Nav className="flex-column" style={{ paddingTop: '45px' }}>
                    {/* <p>Options:</p> */}
                    <Nav.Link className='links' style={{ color: 'white' }} ><FontAwesomeIcon icon={faUsers} /> <Link to="joinings">Members</Link></Nav.Link>
                    <Nav.Link className='links' style={{ color: 'white' }} eventKey="link-2"><FontAwesomeIcon icon={faEdit} /> <Link to="AdminPost">Post</Link></Nav.Link>
                    <Nav.Link className='links' style={{ color: 'white' }} eventKey="link-3"><FontAwesomeIcon icon={faInfo} /> Info</Nav.Link>
                    <Nav.Link className='links' style={{ color: 'white' }} eventKey="link-4"><FontAwesomeIcon icon={faEnvelope} /> Mail</Nav.Link>
                    <Nav.Link className='links' style={{ color: 'white' }} eventKey="link-5"><FontAwesomeIcon icon={faSyncAlt} /> Update</Nav.Link>
                    <Nav.Link className='links' style={{ color: 'white' }} eventKey="link-6"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
                </Nav>
            </div>
        </div>
    )
}
