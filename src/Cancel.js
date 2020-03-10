import React, { Component, useState } from 'react';
import api from './services/api'
// import { Container } from './styles';
import "./App.css"
import Nav from './components/Nav'
import { useHistory }  from 'react-router-dom'

function Cancel() {

    const [avatar, setAvatar] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory();
    async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData()
      data.append('avatar', avatar)
      data.append('name', name)
      data.append('description', description)

      await api.post('/cancel', data)

      
      history.push('/')
    }

    return (
      <div>
        <Nav />
        <section className="cancel">
        <h1 className="title">Cancelar nova pessoa</h1>
        <form onSubmit={handleSubmit} method="post">
          <input 
            className="input"
            type="file"
            name="avatar" 
            onChange={event => setAvatar(event.target.files[0])}  
          />
          <input 
            className="input"
            type="text" 
            placeholder="Nome" 
            name="name"
            onChange={event => setName(event.target.value)}
          />
          <textarea 
            className="textarea"
            placeholder="Motivo da cancelamento" 
            name="description"
            onChange={event => setDescription(event.target.value)}
          >
          </textarea>
          <button className="button is-danger" type="submit">Cadastrar</button>
        </form>
        </section>
      </div>
    )
}

export default Cancel
