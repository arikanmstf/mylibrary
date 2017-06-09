import React, { Component } from 'react';

export default class SideNavigation extends Component {
  render() {
    return (
        <div className="side-navigation">
          <nav className="navbar navbar-default sidebar">
              <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a>Home
                      <span className="pull-right hidden-xs showopacity glyphicon glyphicon-home" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown">Usuarios <span className="caret" />
                     <span className="pull-right hidden-xs showopacity" />
                    </a>
                    <ul className="dropdown-menu forAnimate">
                      <li><a href="{{URL::to('createusuario')}}">Crear</a></li>
                      <li><a>Modificar</a></li>
                      <li><a>Reportar</a></li>
                      <li className="divider" />
                      <li><a>Separated link</a></li>
                      <li className="divider" />
                      <li><a>Informes</a></li>
                    </ul>
                  </li>
                  <li><a>Libros<span className="pull-right hidden-xs showopacity" /></a></li>
                  <li><a>Tags<span className="pull-right hidden-xs showopacity" /></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}
