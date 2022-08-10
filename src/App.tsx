import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
// import Login from './pages/Login';
import AppContainer from './styles/App.styles';
import Home from './pages/Home';

export default function App(): React.FunctionComponentElement<{}> {
  return (
    <AppContainer>
      <GlobalStyle />
      <Home />
    </AppContainer>
  );
}
