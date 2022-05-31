import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./services.css";

import { ClientContext } from "../../context/ClientContext";
import { getClientData } from "../../utils/api.utils";

const Services = () => {
  const [clientServices, setClientServices] = useState([{}]);
  const [categories, setCategories] = useState([]);

  const [serviceIndex, setServiceIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setServiceIndex(selectedIndex);
  };

  useEffect(() => {
    getClientData().then(({ services }) => {
      if (services) {
        setCategories(
          services
            .map((service) => service.categorie)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
        setClientServices(services);
      }
    });
  }, []);

  return (
    <div id="services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 services-links">
            {categories.map((categorie, index) => (
              <>
                <a href={`#categorie-${index}`}>{categorie}</a>
              </>
            ))}
          </div>
          {categories.map((categorie, index) =>
            index % 2 === 0 ? (
              <>
                <Carousel variant="dark" id={`categorie-${index}`}>
                  {clientServices.map((service) => {
                    if (service.categorie === categorie)
                      return (
                        <Carousel.Item>
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <img
                                src={require(`../../img/${service.imageUrl}`)}
                                alt=""
                                className="d-block img-fluid service-image"
                              />
                            </div>
                            <div className="col-md-6 col-sm-12 service-description">
                              <div className="service-content">
                                <div className="description-title">
                                  <h2>{service.title}</h2>
                                  <p className="mt-1"></p>
                                </div>
                                <div className="description-text">
                                  <p>{service.text}</p>
                                  <a
                                    className="btn btn-primary btn-md"
                                    href="https://api.whatsapp.com/send?phone=5521972559811&text="
                                    target="_blank"
                                  >
                                    Agende um Horário
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Carousel.Item>
                      );
                  })}
                </Carousel>
              </>
            ) : (
              <>
                <Carousel
                  variant="dark"
                  id={`categorie-${index}`}
                  className="carousel-right"
                >
                  {clientServices.map((service) => {
                    if (service.categorie === categorie)
                      return (
                        <Carousel.Item>
                          <div className="row">
                            <div className="col-md-6 col-sm-12 service-description">
                              <div className="service-content">
                                <div className="description-title text-right">
                                  <h2>{service.title}</h2>
                                </div>
                                <div className="description-text text-right">
                                  <div className="text-right">
                                    <p>{service.text}</p>
                                    <a
                                    className="btn btn-primary btn-md"
                                    href="https://api.whatsapp.com/send?phone=5521972559811&text="
                                    target="_blank"
                                  >
                                    Agende um Horário
                                  </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <img
                                src={require(`../../img/${service.imageUrl}`)}
                                alt=""
                                className="d-block img-fluid service-image"
                              />
                            </div>
                          </div>
                        </Carousel.Item>
                      );
                  })}
                </Carousel>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
