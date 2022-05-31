import React from "react";
import { Button } from 'react-bootstrap';

import * as BsIcons from 'react-icons/bs'

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={require(`../../img/clinica-camila-logo.png`)}
              alt=""
              className="img-fluid navbar-logo"
            />
          </a>

          <button
            class="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-items">
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Procedimentos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#instagram">
                  Novidades
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#agendador">
                  Agenda
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#footer">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="fixed-btn">
        <a
          className="btn btn-primary btn-lg"
          href="https://api.whatsapp.com/send?phone=5521972559811&text="
          target="_blank"
        >
          <BsIcons.BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
