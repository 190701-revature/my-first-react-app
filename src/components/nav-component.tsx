import * as React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../assets/rev-logo.png';


const NavComponent: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/first" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/first"
                                className="unset-anchor nav-link">First</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/second"
                                className="unset-anchor nav-link">Second</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/clicker"
                                className="unset-anchor nav-link">Clicker</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/dionel"
                                className="unset-anchor nav-link">Dionel</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavComponent;