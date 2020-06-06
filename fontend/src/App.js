import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegacion from './componentes/Navegacion'
import ListaUsuarios from './componentes/ListaUsuarios'
import CrearUsuario from './componentes/CrearUsuario'

function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">
        <Route path="/" exact component={ListaUsuarios} />
        <Route path="/edit/:id" component={CrearUsuario} />
        <Route path="/usuario" component={CrearUsuario} />
      </div>

    </Router>
  );
}

export default App;
