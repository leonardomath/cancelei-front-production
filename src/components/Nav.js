import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

export default class components extends Component {
  render() {
    return <nav><span><Link to="/" className="logo">Cancelei</Link></span></nav>;
  }
}
