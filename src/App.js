import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalProvider } from './contexts/Provider';
import AppRoutes from './routes'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppRoutes />
      </Router>
    </GlobalProvider>
  );
}

export default App;
