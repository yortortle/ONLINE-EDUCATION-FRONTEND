import React from 'react';

class Entry extends React.Component {
  render() {
    return (
        <div className="">
          <h6>{this.props.entryData.title}</h6>
          <h6>{this.props.entryData.subject}</h6>
          <h6>{this.props.entryData.description}</h6>
          <h6>{this.props.entryData.URL}</h6>
          <h6>{this.props.entryData.cost}</h6>
          <h6>{this.props.entryData.created_at}</h6><br/>
        </div>
    )
  }
}

export default Entry;
