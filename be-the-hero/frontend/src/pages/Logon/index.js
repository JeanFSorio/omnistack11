import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // *Importação do pacote de ícones
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  // const [ id, setId] = useState('');

  // function 

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
           />
          <button className="button" type="submit">Entrar</button>
        
          <Link className="back-link" to="/register"> 
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
          </Link> 
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}