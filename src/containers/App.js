import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const AppWrapper = styled.div`
  text-align: center;
  background: pink;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <Logo src={logo} className="App-logo" alt="logo" />
          <AppTitle className="App-title">Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}



export default App;
