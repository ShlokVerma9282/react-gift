// frontend/src/components/Output.js
import React from 'react';

const Output = ({ output }) => {
  return (
    <div className="output-container">
      <h2>Generated Output:</h2>
      <p>{output}</p>
    </div>
  );
};

export default Output;
