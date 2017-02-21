import React from 'react';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount () {
    // ajax fetching would go here.
    // timers, listeners
    axios.get('/api/contests')
      .then(data => {
        // console.log(data.data.contests);
        this.setState({
          contests: data.data.contests
        });
      })
      .catch(console.error);

    // this.setState({
    //   contests: data.contests
    // });
  }

  componentWillUnmount () {
    // clean timers and listeners
  }
  
  

  render () {
    return (
      <div className="container">
        <Header message={this.state.pageHeader} />
        <div className="Contest">
          {this.state.contests.map(contest => <ContestPreview key={contest.id} {...contest} /> )}
        </div>
      </div>
    );
  }
}

export default App;
