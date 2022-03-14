import React from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';

function Home() {
  return (
    <div className="app">
      <div className="navbar-header-wrap">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default Home;
