import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';
import { QueryClientProvider } from 'react-query';
import queryClient from './config/queryClient';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Router>        
        <App />
      </Router>
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
