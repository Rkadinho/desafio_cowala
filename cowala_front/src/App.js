import React, { useEffect, useState } from 'react';
import logo from './Img/Logo.png'
import cowala from './Img/Cowala.png'
import './App.css';
import axios from 'axios'
import InputMask from 'react-input-mask'

function App() {
  const [ip, setIP] = React.useState('');
  const [valores, setValores] = useState({
    nome: '',
    profissão: '',
    celular: ''
  })

  const enviarInput = (e) => {
    const {name, value} = e.target 
    setValores({...valores, [name]: value})
  }

  const enviar = (e) => {
    e.preventDefault();
    const dados_form = new FormData(e.target);
    const dados = Object.fromEntries(dados_form);
  }

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, JSON.stringify(valor))
  }

  const manter = (chave) => {
    localStorage.getItem(chave)
  }

  const getData = async () => {
    const res = await axios.get('https://ip-fast.com/api/ip/')
    setIP(res.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cowala} className="App-logo" alt="logo" />
      </header>
      <form className="App-form">
        <div className='nome'>
          <h2>Nome</h2>
          <input type='text' name='nome' value={valores.nome} onChange={enviarInput}></input>
        </div>
        <div className='prof'>
          <h2>Profissão</h2>
          <input type='text' name='profissão' value={valores.profissão} onChange={enviarInput} />
        </div>
        <div className='cel'>
          <h2>Celular</h2>
          <InputMask mask='(99) 99999-9999' name='celular' value={valores.celular} onChange={enviarInput}/>
        </div>
        <div className='Ip'>
          <h2 >Meu IP</h2>
          <input type='text' name='ip' value={ip} onChange={enviarInput} />
        </div>
        <div>
          <button type='button' className='EncontrarIp' onClick={getData}>ENCONTRAR IP</button>
        </div>
        <div>
          <button className='salvar' type='submit' onClick={() => armazenar('ls_dados', valores)}>SALVAR</button>
        </div>
        <div>
          <button type='reset' className='limpar' onClick={() => localStorage.removeItem('ls_dados') || setValores('') 
          || setIP('')}>
            LIMPAR</button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default App;
