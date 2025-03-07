import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';

import LandingPage from './pages/LandingPage';
import LanguageSelector from './components/LanguageSelector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    secondary: {
      main: '#2ecc71',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
          <LanguageSelector />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
