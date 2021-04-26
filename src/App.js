import React from 'react';
import { PokemonsContainer } from './containers/PokemonsContainer';

const App = () => {
  return (  
    <>
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
    <PokemonsContainer />
    </>
  );
}

export default App;
