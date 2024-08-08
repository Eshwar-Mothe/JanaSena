import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth, faUsers } from '@fortawesome/free-solid-svg-icons';
export const MembersTab = () => {
    return (
        <div>
            <div>
                <Link to="joinings">
                    <button style={{ border: 'none', margin: '0 15px' }}>
                        <FontAwesomeIcon icon={faUsers} style={{ fontSize: '15rem', color: 'silver', background: 'white', margin: '0 5px' }} />
                        <p>Show Members</p>
                    </button>
                </Link>

                <Link to="district">
                    <button className='earth-button' style={{ border: 'none', margi: '5px', background: 'red', color: 'white', borderRadius: '50%' }}>
                        <FontAwesomeIcon icon={faEarth} className='rotatingButton' style={{ fontSize: '15rem', color: 'white', background: 'linear-gradient(90deg, red, green)', borderRadius: '50%', }} />
                        <p className='district-text'>Select District</p>
                    </button>
                </Link>
            </div>



            members tab
        </div>
    )
}
