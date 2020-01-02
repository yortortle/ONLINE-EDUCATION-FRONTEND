import React from 'react';

class Form extends React.Component {
  constructor(){
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
        <label for="exampleFormControlInput1">Insert Title</label>
        <input type="text" class="form-control" placeholder="Any descriptive title for the resource" onChange={this.handleChange} value={this.state.description} />

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Insert Title</label>
            <input type="text" class="form-control" placeholder="Any descriptive title for the resource" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Link</label>
            <input type="text" class="form-control" placeholder="URL to link to the website" value={this.state.URL} onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Cost</label>
            <input type="text" class="form-control" placeholder="Price of the resource" value={this.state.cost}
            onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Select Subject</label>
            <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          <button className="btn btn-primary" variant="primary" type="submit" value="submit"> Submit </button>
          </form>
        </div>
    )
  }
}


export default Form;
