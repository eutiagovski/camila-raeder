import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="container-fluid d-inline justify-content-center">
        <div className="row header-content w-100">
          <div className="col-lg-6 col-sm-12 w-50">
            <img
              src={require(`../../img/1.png`)}
              alt="Clinica Estetica Camila Reader"
              className="header-image img-fluid"
            />
          </div>
          <div className="col-lg-6 col-sm-12 header-title-content">
            <h1>Clínica de Saúde & Biomedicina Estética</h1>
            <button className="btn btn-primary mt-3">
              <a
                className="btn btn-primary btn-md"
                href="https://api.whatsapp.com/send?phone=5521972559811&text="
                target="_blank"
              >
                Agende seu Horário
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;