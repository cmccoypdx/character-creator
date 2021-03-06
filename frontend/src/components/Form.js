const Form = props => {
  const { setInputName, setCharClass, setBirthDate, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label for='inputName'>Name:</label>
      <input
        name='inputName'
        type='text'
        placeholder='Boring Earth name'
        onChange={event => setInputName(event.target.value)}
      />
      <br></br>
      <label for='charClass'>Class:</label>
      <select name='charClass' onChange={event => setCharClass(event.target.value)}>
        <option selected value='Wizard'>
          Wizard
        </option>
        <option value='Warrior'>Warrior</option>
        <option value='Rogue'>Rogue</option>
      </select>
      <br></br>
      <label for='birthDate'>Birthdate:</label>
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
