import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';


export default class components extends Component {
     buttonClicked() {
        alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
    render() {
        return (
            <>
                <div className="overlay">
                    <form method="post">
                        <textarea name="description" placeholder="Por que você está cancelando essa pessoa?"></textarea>
                        <button onClick={buttonClicked} type="submit">Cancelar</button>
                    </form>
                </div>
            </>
        )
    }
    

    
}
