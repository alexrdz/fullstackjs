import React from 'react';

import Header from './Header';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header message='hi header' />
        <h2>the app</h2>
      </div>
    );
  }
}

export default App;
