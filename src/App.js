import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Modals from './components/Modals/Modals';
import Formularios from './components/Formularios/Formularios'

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior/>
        <Resumo/>
        <Modals/>
        <Formularios/>
      </div>
    );
  }
}

export default App;
