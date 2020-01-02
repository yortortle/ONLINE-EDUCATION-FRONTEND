import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-container">
        <img src="https://p.kindpng.com/picc/s/136-1367954_healthcare-and-education-icon-png-download-healthcare-and.png" className="icon"/>
          <ul className="aside-list">
            <div className="sections">
              <li className="sections"> Navigation </li>
              <div className="dropdown-divider" ></div>
            </div>
            <li className="dropdown-item" onClick={() => {this.props.handleView('home')}}> Home </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('about')}}> About </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewAll')}}> View All </li><br/>
            <div className="sections">
              <li className="sections"> Subjects </li>
              <div className="dropdown-divider" ></div>
            </div>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewArt')}}> Art </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewCS')}}> Computer Science </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewDesign')}}> Graphic Design </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewHistory')}}> History </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewLanguage')}}> Language </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewPhilosophy')}}> Philosophy </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewPsychology')}}> Psychology </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewMath')}}> Mathematics </li>
            <li className="dropdown-item" onClick={() => {this.props.handleView('viewScience')}}> Science</li>
          </ul>
      </aside>
    )
  }
}


export default Aside;
