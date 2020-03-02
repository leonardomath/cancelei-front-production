import React, { useEffect, useState } from 'react';
import api from './services/api'
import './App.css';

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
    async function loadFindUser() {
      const response = await api.get(`/user/${findUser}`)
      console.log('user ' + response.data)
      if (response.data == '') {
        response.data = false
      }
      setUserFind(response.data)
    }

    loadFindUser()
  }, [findUser])

  return (
    <div className="App">
      <nav><span>Cancelei</span></nav>
      <section className="search">
        <input onChange={event => setFindIsers(event.target.value)} type="text" placeholder="Nome da pessoa" value={findUser} />
        <button type="submit" >Procurar</button>
        <a className="cancelLink" href="">Cancelar uma nova pessoa</a>
      </section>
      <section className="canceled">
        {userFind ? (
          userFind.map(user => (
            <a href="">{user.name}</a>

          ))
        ) : (
            <div>
              <h1>Usúario não encontrado</h1>
              {console.log('not found')}
            </div>
          )
        }
        {users.map(user => (
          <>
            <ul className="user">
              <li> <img className="avatarImg" src={user.avatar_url} /> </li>
              <li><strong>{user.name}</strong></li>
              <li>Cancelado {user.canceled} vezes</li>
              <a href={user._id}>ver perfil</a>
            </ul>
          </>
        ))}

      </section>
    </div>
  );
}

export default App;
