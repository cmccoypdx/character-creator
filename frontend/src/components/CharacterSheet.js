import React from 'react';

const CharacterSheet = props => {
  const { name, charClass, alignment, stats } = props;

  return (
    <div className='Character-Sheet'>
      {name && (
        <React.Fragment>
          <h1>Name: {name}</h1>
          <h2>Class: {charClass}</h2>
          <h2>Alignment: {alignment}</h2>
          <h2>Stats:</h2>
          <ul>
            {Object.keys(stats).map(key => (
              <li key={key}>
                {key}: {stats[key]}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default CharacterSheet;
