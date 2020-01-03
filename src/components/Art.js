import React from 'react';

class Art extends React.Component {
  render() {
    return (
      <div className="entryDiv">
        <h6 className="collapseMain" onClick={() => {this.props.collapsible(this.props.entryData.id)}}> {this.props.entryData.title}</h6>
        <div className="collapseContent" id={this.props.entryData.id}>
          <h6 className="displayList">Cost: {this.props.entryData.cost}</h6>
          <h6 className="displayList">Description: {this.props.entryData.description}</h6>
          <h6 className="displayList"><a id="linkID" href={this.props.entryData.URL}>Link</a></h6>
          <h6 className="displayList" id="linkID" onClick={() => {this.props.handleView('editEntry', this.props.entryData)}}>Edit This Entry</h6>
          <h6 className="displayList" id="linkID" onClick={() => {this.props.handleDelete(this.props.entryData.id)}}>Delete This Entry</h6>
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT COMPONENT: SUBMISSION
// =============================
export default Art;
