
import { useEffect, useContext, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";

import axios from "axios";

import "./agendador.css";

// import { getClientDataFromServer } from "../../utils/clients.api";
// import { AuthContext } from "../../contexts/AuthContext";

const clientId = "62829a1b98112b12e3833155";

const Agendador = () => {
  const [services, setServices] = useState([{}]);
  const [serviceDescription, setServiceDescription] = useState({});
  const [date, setDate] = useState(new Date());
  const [timesArray, setTimesArray] = useState([]);
  const [formValues, setFormValues] = useState({});
  // const authContext = useContext(AuthContext);

  const onChange = async (e) => {
    setServiceDescription(services[e.target.value]);
  };

  const handleDateFilter = async (e) => {
    var dateToFilter = new Date(e.target.value);

    dateToFilter.setHours(dateToFilter.getHours() + 3);

    const eventParams = {
      calendarId: "primary",
      timeMin: dateToFilter.toISOString(),
      timeMax: new Date(new Date(dateToFilter).setHours(22)).toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    };

    const arrayTimes = await axios.post("agendador/api/latest-events", {
      clientId,
      eventParams,
    });
    setDate(dateToFilter);

    console.log(arrayTimes.data);

    var timesList = [];
    for (var x = 0; x < arrayTimes.data.length; x++) {
      var newDate = new Date(arrayTimes.data[x].hour);
      newDate.setHours(newDate.getHours() + 3)

      console.log(format(newDate, "H:mma"))

      timesList.push({
        hour: newDate.toISOString(),
        empty: arrayTimes.data[x].empty,
        hourString: format(newDate, "H:mma"),
      })
    };
    console.log(timesList)
    setTimesArray(timesList)
  };

  const onFormChange = async (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    var startDateTime = new Date(formValues.startHour);
    var endDateTime = new Date(formValues.startHour);

    endDateTime.setMinutes(
      startDateTime.getMinutes() + parseInt(serviceDescription.durationTime)
    );

    startDateTime.setHours(startDateTime.getHours() + 3);
    endDateTime.setHours(endDateTime.getHours() + 3);

    const eventParams = {
      calendarId: "primary",
      requestBody: {
        summary: `${serviceDescription.title} com ${formValues.name}`,
        description: `Cliente: ${formValues.name}, telefone: ${formValues.contact}, email: ${formValues.email}`,
        location: "",
        start: {
          dateTime: startDateTime.toISOString(),
        },
        end: {
          dateTime: endDateTime.toISOString(),
        },
      },
    };

    const { data } = await axios.post("/agendador/api/calendar-event", {
      clientId,
      eventParams,
    });
    alert(data.status);
    console.log(data);
  };

  // useEffect(() => {
  //   getClientDataFromServer(authContext.clientId).then((resp) => {
  //     const { services } = resp.data.client;
  //     setServices(services);
  //     setServiceDescription(services[0]);
  //   });
  // }, []);

  return (
    <div className="agendador-container" id="agendador">
      <div className="card agendador-card container-fluid">
        <div className="card-title"><h2>Agende seu Horário Conosco</h2></div>
        <div className="card-body">
          <form className="agendador-form" onSubmit={(e) => onFormSubmit(e)}>
            <div className="col-6 form-items">
              <div className="calendar-hour">
                <label Htmlfor="date" className="col-4 col-form-label">
                  Escolha o procedimento:
                </label>
                <div className="col-8">
                  <div className="input-group">
                    <select
                      className="form-select"
                      name="service"
                      onChange={(e) => onChange(e)}
                    >
                      {services.map((service, index) => (
                        <option value={index}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-4 col-form-label">
                  Tempo de duração aproximado:
                </label>
                <label for="date" className="col-4 col-form-label">
                  {serviceDescription.durationTime} minutos
                </label>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-4 col-form-label">
                  Descrição do procedimento:
                </label>
                <label for="date" className="col-8 col-form-label">
                  <p>{ReactHtmlParser(serviceDescription.text)}</p>
                </label>
              </div>
            </div>

            <div className="col-6 form-items">
              <div className="calendar-hour">
                <label for="date" className="col-6 col-form-label">
                  Escolha a melhor data:
                </label>
                <div className="col-6 col-form-label">
                  <div className="input-group date" id="date">
                    <Form.Control
                      type="date"
                      name="startDate"
                      onChange={handleDateFilter}
                    />
                  </div>
                </div>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-6 col-form-label">
                  Escolha o melhor horário:
                </label>
                <div className="col-6 col-form-label">
                  <div className="input-group">
                    <select
                      className="form-select"
                      name="startHour"
                      onChange={onFormChange}
                    >
                      {timesArray.map((time) => {
                        const timeItem = format(new Date(time.hour), "H:mma")
                        if (time.empty)
                          return <option value={time.hour}>{timeItem}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-6 col-form-label">
                  Qual o seu nome:
                </label>
                <div className="col-6 col-form-label">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formValues.name}
                      onChange={onFormChange}
                    />
                  </div>
                </div>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-6 col-form-label">
                  Qual o seu telefone:
                </label>
                <div className="col-6 col-form-label">
                  <div className="input-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="contact"
                      value={formValues.contact}
                      onChange={onFormChange}
                    />
                  </div>
                </div>
              </div>
              <div className="calendar-hour">
                <label for="date" className="col-6 col-form-label">
                  Qual o seu email:
                </label>
                <div className="col-6 col-form-label">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formValues.email}
                      onChange={onFormChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-btn">
              <button type="sumbit" className="btn btn-primary mt-3">
                Agendar Horário
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agendador;