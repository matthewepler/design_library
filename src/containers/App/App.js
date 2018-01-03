import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  background: pink;
`;

class App extends Component {
  componentDidMount() {
    console.log('hi');
  }

  render() {
    return (
      <AppWrapper>
        Sup.
      </AppWrapper>
    );
  }
}


export default App;
