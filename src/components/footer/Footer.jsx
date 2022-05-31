import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiWhatsappLine,
} from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container-fluid">
        <div className="footer-items">
          <div className="container row">
            <div className="col-sm-4 footer-item">
              <h1>Clinica Camila Raeder</h1>
              <ul>
                <li>contato@clinicacamilaraeder.com.br</li>
                <li>Whatsapp: (21) 97255-9811</li>
                <li>
                  Rua Silva Cardoso, 405 - SALA 425 - Bangu Rio de Janeiro - RJ
                </li>
              </ul>
            </div>
            <div className="col-sm-3 footer-item">
              <h1>Procedimentos</h1>
              <ul>
                <li>Embelezamento Facial</li>
                <li>Estética Facial</li>
                <li>Estética Corporal</li>
                <li>Procedimentos Biomédicos</li>
              </ul>
            </div>
            <div className="col-sm-3 footer-item">
              <h1>Horários de Funcionamento</h1>
              <ul>
                <li>Segunda à Sexta: 08:00 as 19:00</li>
                <li>Sábado: 08:00 as 16:00</li>
              </ul>
            </div>
            <div className="col-sm-2 footer-item">
              <h1>Redes Sociais</h1>
              <div className="footer-icons">
                <ul>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=5521972559811&text="
                      target="_blank"
                    >
                      <RiWhatsappLine className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="about_blank"
                      href="https://www.instagram.com/clinicacamilaraeder/"
                    >
                      <RiInstagramLine className="footer-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 cpright">
            <h6>Copyright 2022 @ Future Machines </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
