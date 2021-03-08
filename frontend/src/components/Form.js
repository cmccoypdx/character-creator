const Form = props => {
  const { setInputName, charClass, setCharClass, setBirthDate, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='inputName'>Name:</label>
      <input
        name='inputName'
        type='text'
        placeholder='Boring Earth name'
        onChange={event => setInputName(event.target.value)}
      />
      <br></br>
      <label htmlFor='charClass'>Class:</label>
      <select name='charClass' value={charClass} onChange={event => setCharClass(event.target.value)}>
        <option value='Wizard'>
          Wizard
        </option>
        <option value='Warrior'>Warrior</option>
        <option value='Rogue'>Rogue</option>
      </select>
      <br></br>
      <label htmlFor='birthDate'>Birthdate:</label>
      <input
        name='birthDate'
        type='text'
        placeholder='MM/DD'
        onChange={event => setBirthDate(event.target.value)}
      />
      <br></br>
      <input type='submit' value='Roll a new character!' />
    </form>
  );
};

export default Form;
