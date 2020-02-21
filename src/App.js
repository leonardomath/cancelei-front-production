import React, { useEffect, useState } from 'react';
import api from './services/api'
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/')

      setUsers(response.data)
    }

    loadUsers()
  }, [])

  return (
    <div className="App">
      <nav><span>Cancelei</span></nav>
      <section className="search">
        <input type="text" placeholder="Nome da pessoa"/>
        <button type="submit">Procurar</button>
      </section>
      <section className="canceled">

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
