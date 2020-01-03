import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      subject: '',
      description: '',
      URL: '',
      cost: '',
      id: null,
      created_at: null,
      updated_at: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addEntry') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editEntry') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      subject: this.props.formInputs.subject,
      description: this.props.formInputs.description,
      URL: this.props.formInputs.URL,
      cost: this.props.formInputs.cost,
      id: this.props.formInputs.id,
      created_at: this.props.formInputs.created_at,
      updated_at:this.props.formInputs.updated_at
    })
  }


  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Insert Title</label>
            <input type="text" class="form-control" id="title" placeholder="Any descriptive title for the resource" value={this.state.title} onChange={this.handleChange} required/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Link</label>
            <input type="text" className="form-control" id="URL" placeholder="URL to link to the website" value={this.state.URL} onChange={this.handleChange} required/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Cost</label>
            <input type="number" className="form-control" id="cost" placeholder="Price of the resource" value={this.state.cost}
            onChange={this.handleChange} required/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Select Subject</label>
            <select className="form-control" id="subject" value={this.state.subject} onChange={this.handleChange}>
              <option>Select One</option>
              <option>Art</option>
              <option>Computer Science</option>
              <option>History</option>
              <option>Language</option>
              <option>Philosophy</option>
              <option>Psychology</option>
              <option>Mathematics</option>
              <option>Science</option>
            </select>
          </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea className="form-control" id="description" rows="3" placeholder="Enter a description of some sort - don't leave blank" value={this.state.description} onChange={this.handleChange} required> </textarea>
            </div>
          <button className="btn btn-primary" variant="primary" type="submit" value="submit"> Submit </button>
          </form>
        </div>
    )
  }
}


export default Form;
