// == Import npm
import React from 'react';

// Import Css
import './app.scss';

// Import components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// == Import

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default App;
