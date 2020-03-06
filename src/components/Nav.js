import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';
import Header from './Header'

export default class components extends Component {


  render() {
    return (
      <>
      <Header/>
      <nav>
        <span>
          <Link to="/" className="logo">Cancelei</Link>
        </span>
      </nav>
      </>
    )}

}
