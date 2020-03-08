import React, { useEffect, useState } from 'react';
import api from './services/api'
import './App.css';
import Nav from './components/Nav';
import {
  Link
} from "react-router-dom";

import Profile from './Cancel'
import Top10 from './components/Top10'

function App() {


  const [findUser, setFindIsers] = useState('')

  const [users, setUsers] = useState([])

  const [userFind, setUserFind] = useState([])

  // function handleOnChange() {
  //   async function loadFindUser() {
  //     const response = await api.get(`/user/${findUser}`)

  //     setUserFind(response.data)
  //   }

  //   loadFindUser()
  // }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/')

      setUsers(response.data)
    }

    loadUsers()
  }, [])

  useEffect(() => {
    const input = document.querySelector('#input').value
    const findUsers = document.querySelector('.findUsers')

    if (input === '') {
      console.log('no data')
      findUsers.style.display = 'none'
    }

    async function loadFindUser() {
      if (findUser) {
        const response = await api.get(`/user/${findUser}`)
        findUsers.style.display = 'block'
        //console.log('user ' + response.data)
        if (response.data == '') {
          response.data = false
        }
        setUserFind(response.data)

      }
    }
    loadFindUser()
  }, [findUser])

  return (
    <div className="App">
      <Nav />
      <section className="search">
        <input id="input" value={findUser} onChange={event => setFindIsers(event.target.value)} type="text" placeholder="Nome da pessoa" value={findUser} />
        <button type="submit" >Procurar</button>
        <Link to="/cancel" className="cancelLink">Cancelar uma nova pessoa</Link>
      </section>

      <section className="body">
        <div className="findUsers">
          {userFind ? (
            userFind.map(user => (
              <a href="">{user.name}</a>

            ))
          ) : (
              <div className="user-not-found">
                <h1>Essa pessoa nao foi cancelada ainda</h1>
                {console.log('not found')}
              </div>
            )
          }
        </div>
        <section className="canceled">
          {users.map(user => (
            <>
              <ul className="user">
                <li> <img className="avatarImg" src={user.avatar_url} /> </li>
                <li><strong>{user.name}</strong></li>
                <li>Cancelado {user.canceled} vezes</li>
                <Link to={`user/` + user._id}>ver perfil</Link>
              </ul>
            </>
          ))}

        </section>

        {/* <Profile /> */}
        <Top10 />
      </section>
    </div>
  );
}

export default App;
