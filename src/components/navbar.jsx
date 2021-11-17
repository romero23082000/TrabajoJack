import React, { Fragment } from "react";


const Navbar = () => {
  return (
    <Fragment>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <header>
        <nav>
          <ul class="enlaces-menu">
            <li><a href="inicio.html">Perfil</a></li>
            <li><a href="educacion.html">Educación</a></li>
            <li><a href="experiencia.html">Experiencia</a></li>
          </ul>
          <button class="ham" type="button">
            <span class="br-1"></span>
            <span class="br-2"></span>
            <span class="br-3"></span>
          </button>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar