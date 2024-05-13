// frontend/src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Output from './components/Output';

const App = () => {
  const [output, setOutput] = useState('');

  return (
    <div>
      <h1>GiftMaster.AI</h1>
      <Form setOutput={setOutput} />
      {output && <Output output={output} />}
    </div>
  );
};

export default App;
