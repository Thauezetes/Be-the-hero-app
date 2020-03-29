import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './style.css';


export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');


    // 1 paramentro: função a ser executada
    // 2 parametro: quando vai ser executada
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    } /// 1 parametero
        , [ongId]); /// 2 parametro


    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id != id));
        }
        catch (error) {
            alert('Erro ao deletar caso');
        }
    }

function handleLogout(){
    localStorage.clear();
    history.push('/');
}

    return (
        <div className="profile-container">

            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span> Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout}>
                    <FiPower size={20} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(item => (
                    <li key={item.id}>
                        <strong>CASO:</strong>
                        <p>{item.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{item.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</p>

                        <button onClick={() => handleDeleteIncident(item.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}