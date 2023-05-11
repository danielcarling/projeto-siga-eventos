import React, { useState } from 'react';

function Exemplo() {
  const [selectedOption, setSelectedOption] = useState('');

  const divStyle = {
    height: '100px',
    width: '100px',
    border: '1px solid black',
    backgroundColor: selectedOption === 'option1' ? 'red' : selectedOption === 'option2' ? 'green' : selectedOption === 'option3' ? 'blue' : ''
  }

  return (
    <div>
      <input type="radio" id="option1" name="option" value="option1" checked={selectedOption === 'option1'} onChange={() => setSelectedOption('option1')} />
      <label htmlFor="option1">Option 1</label><br/>

      <input type="radio" id="option2" name="option" value="option2" checked={selectedOption === 'option2'} onChange={() => setSelectedOption('option2')} />
      <label htmlFor="option2">Option 2</label><br/>

      <input type="radio" id="option3" name="option" value="option3" checked={selectedOption === 'option3'} onChange={() => setSelectedOption('option3')} />
      <label htmlFor="option3">Option 3</label><br/>

      <div style={divStyle}></div>
    </div>
  );
}
