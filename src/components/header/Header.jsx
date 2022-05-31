import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center header-content w-100">
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
