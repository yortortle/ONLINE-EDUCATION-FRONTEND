import React from 'react';

class Art extends React.Component {
  render() {
    return (
        <div className="">
          <p className="collapseMain" onClick={() => {this.props.collapsible()}}> {this.props.entryData.title}</p>
          <h6 className="collapseContent">{this.props.entryData.URL}</h6>
          <h6>{this.props.entryData.cost}</h6>
          <h6>{this.props.entryData.created_at}</h6>
          <h6>{this.props.entryData.updated_at}</h6><br/>
        </div>
    )
  }
}

// =============================
// EXPORT COMPONENT: SUBMISSION
// =============================
export default Art;
