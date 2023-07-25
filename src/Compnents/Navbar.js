import React from 'react'

const Navbar=()=>{

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsJection</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Enjoy your Daily Dosage!</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="/Business">Business</a></li>
                        <li><a className="dropdown-item" href="/Entertainment">Entertainment</a></li>
                        <li><a className="dropdown-item" href="/General">General</a></li>
                        <li><a className="dropdown-item" href="/Health">Health</a></li>
                        <li><a className="dropdown-item" href="/Science">Science</a></li>
                        <li><a className="dropdown-item" href="/Sports">Sports</a></li>
                        <li><a className="dropdown-item" href="/Technology">Technology</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar
