import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faLifeRing, faUserCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'sticky', width: '100%', top: '1px', zIndex: '1' }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://1000logos.net/wp-content/uploads/2022/12/Jana-Sena-Logo.png" alt="" width="100%" height="70vh" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontWeight: "bold", paddingInline: "50px", fontSize: "20px" }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ marginLeft: "2rem" }}><FontAwesomeIcon icon={faHome} /> HOME</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={{ marginLeft: "2rem", color: "red" }}><FontAwesomeIcon icon={faUserFriends} /> Joinings</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support" style={{ marginLeft: "2rem" }}><FontAwesomeIcon icon={faLifeRing} /> Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" style={{ marginLeft: "2rem" }}><FontAwesomeIcon icon={faUserCog} /> Admin</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ marginLeft: "2rem" }}><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="search">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
