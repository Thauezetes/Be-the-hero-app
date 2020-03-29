import React from 'react';

import './global.css';

import Routes from './routes';

/// component do react, função q retorna html
function App() {
  // const [counter, setCounter ] = useState(0); //useState -> array [valor da variavel, função de atualização]
  // function increment() {
  //   setCounter(counter + 1);
  // }
  return (
      <Routes />
  );
}

export default App;
