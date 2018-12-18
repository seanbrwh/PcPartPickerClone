import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Routes from './Routes'


class App extends Component {
  render() {
    return (    
      <main>        
        <Header/>
        <Nav/>
          {Routes}
        <Footer/>
      </main>
    );
  }
}

export default App;
