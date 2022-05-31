
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services'
import Instagram from './components/instagram/Instagram';
import Agendador from './components/agenda/Agendador';
import Footer from './components/footer/Footer';
import { useEffect, useContext, useState } from 'react';

import { getClientData } from './utils/api.utils';
import { ClientContext } from './context/ClientContext';

import './App.css';

const clientId = "";

function App() {
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    getClientData(clientId).then(client => {
      setClientData(client);
    });
  }, [])

  return (
    <div className="App">
      <ClientContext.Provider value={clientData}>
        <Navbar />
        <Header />
        <Services />
        {/* <Agendador /> */}
        <Instagram />
        <Footer />
      </ClientContext.Provider>
    </div>
  );
}

export default App;
