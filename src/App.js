import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Where You Are</Link>} scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/projects">Emergencies</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Where You Are</Link>}>
            <Navigation>
              <Link to="/landingpage">Home</Link>
              <Link to="/projects">Emergencies</Link>
              <Link to="/aboutme">About Us</Link> 
              <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
