import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-container">
        <img src="https://p.kindpng.com/picc/s/136-1367954_healthcare-and-education-icon-png-download-healthcare-and.png" className="icon"/>
          <ul className="aside-list">
            <div className="sections">
              <li className="sections"> Nav </li>
              <div className="dropdown-divider" ></div>
            </div>
            <li className="dropdown-item"> Home </li>
            <li className="dropdown-item"> About </li>
            <li className="dropdown-item"> View All </li><br/>
            <div className="sections">
              <li className="sections"> Subjects </li>
              <div className="dropdown-divider" ></div>
            </div>
            <li className="dropdown-item"> Art </li>
            <li className="dropdown-item"> Computer Science </li>
            <li className="dropdown-item"> Graphic Design </li>
            <li className="dropdown-item"> History </li>
            <li className="dropdown-item"> Language </li>
            <li className="dropdown-item"> Philosophy </li>
            <li className="dropdown-item"> Psychology </li>
            <li className="dropdown-item"> Mathematics </li>
            <li className="dropdown-item"> Science</li>
          </ul>
      </aside>
    )
  }
}


export default Aside;
