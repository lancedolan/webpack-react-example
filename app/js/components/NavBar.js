import React from "react";
import Circle from "../../asset/circle.png";

export default function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={Circle} alt="" width="24" height="24"
                     className="d-inline-block align-text-top" /> My App
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./index.html">React Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./no-react.html">Vanilla JS Page</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Dummy Link 1</a></li>
                            <li><a className="dropdown-item" href="#">Dummy Link 2</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Truly Dumb Link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}