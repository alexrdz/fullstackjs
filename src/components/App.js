import React from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount () {
    // ajax fetching would go here.
    // timers, listeners
  }

  componentWillUnmount () {
    // clean timers and listeners
  }
  
  

  render () {
    return (
      <div className="container">
        <Header message={this.state.pageHeader} />
        <div className="Contest">
          {this.props.contests.map(contest => <ContestPreview {...contest} /> )}
        </div>
      </div>
    );
  }
}

export default App;
