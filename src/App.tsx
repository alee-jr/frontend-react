import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <Router>
      <ReduxProvider store={store}>
        <GlobalStyle />
        <Header />
        <Routes />
      </ReduxProvider>
    </Router>
  );
};

export default App;
