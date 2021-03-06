import { useState } from 'react';
import Form from './components/Form';
import CharacterSheet from './components/CharacterSheet';

import axios from 'axios';

import './App.css';

const App = () => {
  const [inputName, setInputName] = useState('');
  const [charClass, setCharClass] = useState('Wizard');
  const [charName, setCharName] = useState('');
  const [birthDate, setBirthDate] = useState('01/31');
  const [stats, setStats] = useState({});
  const [alignment, setAlignment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .post(
        `/character/${charClass.toLowerCase()}`,
        JSON.stringify({ name: inputName, birthDate }),
        axiosConfig
      )
      .then(res => {
        setCharName(res.data.name);
        setStats(res.data.stats);
        setAlignment(res.data.alignment);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <CharacterSheet name={charName} stats={stats} charClass={charClass} alignment={alignment} />
        <Form
          setInputName={setInputName}
          setCharName={setCharName}
          setCharClass={setCharClass}
          setBirthDate={setBirthDate}
          handleSubmit={handleSubmit}
        />
      </header>
    </div>
  );
};

export default App;
