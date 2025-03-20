import React, { useState } from "react";
import { FaUser, FaLock, FaFacebook, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineAddHome } from "react-icons/md";  
import { FaPhone } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import styles from './Registrar.module.css'; // Importando o CSS como módulo

import backgroundImage from '../img/1308327-cenario-de-montanhas-a-noite-vetor.jpg'; 

const Registrar = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [idade, setIdade] = useState("");
  const [enderecoFacebook, setEnderecoFacebook] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Registro:", { 
      nomeCompleto, idade, enderecoFacebook, password, email, telefone, endereco 
    });
  };

  return (
    <div className={styles.registrarBackground} style={{ backgroundImage: `url(${backgroundImage})` }}> {/* Usando a imagem importada */}
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Registre-se</h1>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Nome Completo"
              required
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
            <FaUser className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="number"
              placeholder="Idade"
              required
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
            <FaCalendarAlt className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Facebook"
              required
              value={enderecoFacebook}
              onChange={(e) => setEnderecoFacebook(e.target.value)}
            />
            <FaFacebook className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineEmail className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="number"
              placeholder="Telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <FaPhone className={styles.icon} />
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Endereço"
              required
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <MdOutlineAddHome className={styles.icon} />
          </div>

          <button type="submit">Registrar</button>       
          
          <Link to="/">
        <button type="submit">Voltar</button>
      </Link>

        </form>
      </div>
    </div>
  );
};

export default Registrar;
