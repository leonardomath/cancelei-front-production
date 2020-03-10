import React, { useEffect, useState } from 'react';
import api from '../services/api'
import { Link } from 'react-router-dom'
// import './App.css';


function Top10() {


  const [top10, setTop10] = useState([])

  useEffect(() => {
    async function loadTop10() {
      const response = await api.get('/top10canceled')

      setTop10(response.data)
    }

    loadTop10()
  }, [])


  return (
    <div className="top10">
      <ul>
        <h1 className="title is-5">Top 10 cancelados</h1>
        {top10.map(user => (
          <>
            <li>
              <h2><Link to={`user/` + user._id}>{user.name}</Link></h2>
              <p>Cancelado {user.canceled} vezes</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Top10;
