import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import api from '../services/api'

import Nav from './Nav'
import Overlay from './Overlay'

// import { Container } from './styles';


function User({ match }) {

  const [user, setUser] = useState([])

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/userId/' + match.params.id)

      setUser(response.data)
    }

    loadUser()
  })

  const activeOverlay = () => {
    const overlay = document.querySelector('.overlay')
    overlay.style.display = 'flex'
  }



  return (

    <div>
      <Nav />
      <Overlay userId={match.params.id} />
      {user.map(user => (
        <div className="userdiv">
          <div className="user-profile">
            <img src={user.avatar_url} />
            <p className="title is-5">{user.name}</p>
            <p class="subtitle is-6">Cancelado {user.canceled} vezes</p>
            <button className="button is-danger no-margin" id="btnCancelarPessoa" onClick={activeOverlay}>Cancelar essa pessoa</button>
          </div>
          <div className="user-comments">
            <h2 className="title">Motivos dos cancelamentos</h2>
            <div className="user-comments-int">
              {user.description.map(desc => (
                <div className="box-canceled box">{desc}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
