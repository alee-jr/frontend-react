import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </Router>
  );
};

export default App;
