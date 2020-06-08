import React, {Component} from 'react';
import {Link} from 'react-router';
import {Footer} from 'react-materialize';
import '../../resource/template.css';


class RT_Footer extends Component{
  render(){
    return (
    <div>
      {this.props.children}
      <Footer copyrights="&copy; 2020 Copyright Text"
          moreLinks={
            <Link className="grey-text text-lighten-4 right" href="#!">More Links</Link>
          }
          links={
            <ul>
              <li><Link to="/home" className="grey-text text-lighten-3">Home</Link></li>
              <li><Link to="/aboutme" className="grey-text text-lighten-3">About Us</Link></li>
              <li><Link to="/contact" className="grey-text text-lighten-3">Contact Us</Link></li>
            </ul>
          }
          className='example'
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>
    </div>
    );
  }
}
export default RT_Footer;