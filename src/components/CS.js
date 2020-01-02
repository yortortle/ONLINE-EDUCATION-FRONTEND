import React from 'react';

class CS extends React.Component {
  render() {
    return (
        <div className="">
          <a href="{this.props.entryData.URL}">{this.props.entryData.title}</a>
          <h6>{this.props.entryData.URL}</h6>
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
export default CS;
