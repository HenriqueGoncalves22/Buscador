import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";
import styles from './Buscador.module.css'; // Importando o CSS como módulo
import api from '../services/api';

const Buscador = () => {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Digite um valor');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro ao buscar");
      setInput("");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projeto para buscar CEP</h1>

      <div className={styles.containerNome}>
        <input
          type="text"
          placeholder="Digite seu Nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <span className={styles.nome}><h2>{nome}</h2></span>

      <Link to="/Registrar">
        <button id='cadastro' className={styles.cadastro}>Cadastre-se</button>
      </Link>

      <div className={styles.containerInput}>
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.buttonSearch} onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className={styles.main}>
          <h2>CEP {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.regiao}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default Buscador;
