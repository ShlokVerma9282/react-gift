// frontend/src/components/Form.js
import React, { useState } from 'react';
import { submitText } from '../api';

const Form = ({ setOutput }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitText(text);
    setOutput(response.output);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Enter text for gift search:</label>
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
