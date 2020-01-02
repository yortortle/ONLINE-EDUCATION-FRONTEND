import React from 'react';

class Entry extends React.Component {
  render() {
    return (
      <div className="">
        <h6 className="collapseMain" onClick={() => {this.props.collapsible(this.props.entryData.id)}}> {this.props.entryData.title}</h6>
        <div className="collapseContent" id={this.props.entryData.id}>
          <h6 className="displayList"><a href={this.props.entryData.URL}>Link</a></h6>
          <h6 className="displayList">Cost: {this.props.entryData.cost}</h6>
          <h6 className="displayList">Description: {this.props.entryData.description}</h6>
          <h6 className="displayList">Edit This Entry</h6>
          <h6 className="displayList">Delete This Entry</h6>
        </div>
      </div>
    )
  }
}

export default Entry;
