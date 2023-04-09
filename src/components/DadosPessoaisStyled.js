//estilizando o componente DadosPessoais

import styled from 'styled-components';

export const SCForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    justify-content: center;
    width: 50%;
    height: 50%;
    height: 50%;
    top: 15%;
    left: 20%;
    padding: 4em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    `;

export const SCLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
    `;

export const SCInput = styled.input`
    width: 100%;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 0.5em;
    `;

export const SCBotao = styled.button`
    width: 100%;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 0.5em;
    background-color: #ccc;
    color: #fff;
    font-weight: bold;
    `;
    