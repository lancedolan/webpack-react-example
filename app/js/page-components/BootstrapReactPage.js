import React, {useState} from 'react'
import {Button} from 'bootstrap';
import Circle from '../../asset/circle.png'

function BootstrapReactPage(props) {

    const [clicks, setClicks] = useState(0)

    const nav =
        <nav className="navbar navbar-expand-lg navbar-light bg-light" key="1">
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
                                <li><a className="dropdown-item" href="#">Do nothing</a></li>
                                <li><a className="dropdown-item" href="#">Do more nothing</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Do most nothing</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    const container =
        <div className="container" style={{marginTop: '4em'}} key="2">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={()=>{setClicks(clicks+1)}}>
                            { clicks < 1 && <span>I've never been clicked!</span>}
                            { clicks >= 1 && <span>I've been clicked {clicks} time{clicks==1?'':'s'}</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    return [nav,container]
}

export default BootstrapReactPage
