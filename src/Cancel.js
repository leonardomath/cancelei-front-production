import React, { Component } from 'react';
import api from './services/api'
// import { Container } from './styles';
import "./App.css"
import Nav from './components/Nav'

export default class src extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Cancelar nova pessoa</h1>
        <form>
          <input type="file" name="avatar" />
          <input type="text" placeholder="Nome" name="name" />
          <textarea placeholder="Motivo da cancelamento" name="description"></textarea>
          <button type="submit">Cancelar</button>
        </form>
      </div>
    )
  }
}
