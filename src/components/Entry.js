// =============================
// DEPENDENCIES
// =============================
import React from 'react';

// =============================
// COMPONENT CLASS: SUBMISSION
// =============================
class Entry extends React.Component {
  render() {
    return (
        <div className="">
          <h6>{this.props.entryData.title}</h6>
          <h6>{this.props.entryData.subject}</h6>
          <h6>{this.props.entryData.description}</h6>
          <h6>{this.props.entryData.URL}</h6>
          <h6>{this.props.entryData.cost}</h6>
          <h6>{this.props.entryData.created_at}</h6>
        </div>
    )
  }
}

// =============================
// EXPORT COMPONENT: SUBMISSION
// =============================
export default Entry;
