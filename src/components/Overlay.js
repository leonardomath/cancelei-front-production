import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api'
// import { Container } from './styles';


function Overlay(props) {

    const disableOverlay = () => {
        const overlay = document.querySelector('.overlay')
        cleanInput()
        overlay.style.display = 'none'
    }

    const cleanInput = () => {
        const overlay = document.querySelector('.overlay textarea')
        overlay.value = ''
    }

    const [description, setDescription] = useState('')

    const handleDescription = async (event) => {
        event.preventDefault()
        const descricao = description
        await api.post(`/updateDesc/${props.userId}/${descricao}`)

        cleanInput()
        disableOverlay()
    }



    return (
        <>
            <div className="overlay">
                <button onClick={disableOverlay}>Fechar</button>
                <form method="post" onSubmit={handleDescription}>
                    <textarea name="description" placeholder="Por que você está cancelando essa pessoa?" onChange={event => setDescription(event.target.value)}></textarea>
                    <button type="submit">Cancelar</button>
                </form>
            </div>
        </>
    )


}

export default Overlay