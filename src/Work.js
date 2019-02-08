import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>What we did:</h2>
        <ul>
          <li className="text-left">
            <Link to="/refactor">Refactor</Link>
          </li>
          <li className="text-left">New Features</li>
        </ul>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <iframe
            src="https://giphy.com/embed/dJZi221XtSnHW"
            width="480"
            height="273"
            frameBorder="0"
          />
          <iframe
            src="https://giphy.com/embed/3ov9jRPMChw9ZzVlUk"
            width="480"
            height="273"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

export default Work;
