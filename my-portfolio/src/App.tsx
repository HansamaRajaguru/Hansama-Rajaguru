import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './MainContent';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

const WrappedApp: React.FC = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;