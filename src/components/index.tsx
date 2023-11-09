import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

const App: React.FC = () => {
  return (
    <div>
      <Button text="Pequeno" size="small" />
      <Button text="Médio" size="medium" />
      <Button text="Grande" size="large" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
