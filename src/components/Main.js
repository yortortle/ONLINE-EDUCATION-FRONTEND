import React from 'react';
import Entry from './Entry.js'

//api connection
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://cors-anywhere.herokuapp.com/http://online-education2020.herokuapp.com/api'
} else {
  baseUrl = 'http://cors-anywhere.herokuapp.com/http://online-education2020.herokuapp.com/api';
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [],
      entries: []
    }
  }

  //get entries from the api
  fetchEntries = () => {
    fetch(`${baseUrl}/entries`)
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        entries: jsonData.data,
        links: jsonData.links
      })
    }).catch(error => console.log(error))
  }

  //function to handle creation of new entries
  createEntries = (createData) => {
    fetch(`${baseUrl}/entry`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPost => {
      return createdPost.json()
    })
    .then(jsonedPost => {
      console.log(this.props);
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.entries = jsonedPost
        return { entries: prevState.entries }
      })
    })
    .catch(err => console.log(err))
  }

  //function to handle update of entries
    updateEntry= (updateData) => {
      fetch(`${baseUrl}/entry/${updateData.id}`, {
        body: JSON.stringify(updateData),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(updatedPost => {
          // switch back to the home view after editing a post
          this.props.handleView('home')
          this.fetchEntries()
        })
        .catch(err => console.log(err))
    }

    //delete entry
    deleteEntry = (id) => {
      fetch(`${baseUrl}/entry/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(json => {
          this.setState(prevState => {
            const entries = prevState.entries.filter(entry => entry.id !== id)
            return { entries }
          })
        })
        .catch(err => console.log(err))
      }


  //lifecycle function to pull data for render at page load
  componentDidMount() {
    this.fetchEntries()
  }

  render () {
    let view1;
    if (this.props.view.page === 'home') {
      view1 = this.state.entries.map((entryData) => (
        <Entry
          handleView={this.props.handleView}
          key={entryData.id}
          entryData={entryData}
          handleDelete={this.deleteEntry}
        />
      ))
    }
    return(
      <div className="main-container">
        <div className="test">
          <div className="display">
            <h1 className="display-6">Online Education</h1>
            <p className="lead">An encyclopedia of online educational resources</p>
          </div>
        </div>
        {view1}
      </div>
    )
  }
}
export default Main;
