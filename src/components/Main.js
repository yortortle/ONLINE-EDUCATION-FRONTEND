import React from 'react';
import Entry from './Entry.js'
import Home from './Home.js'
import About from './About.js'
import Art from './Art.js'
import CS from './CS.js'

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

  collapsible = () => {
    var coll = document.getElementsByClassName("collapseContent");
    var i;
    console.log("hi");

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  render () {
    let view1;
    if (this.props.view.page === 'viewAll') {
      view1 = this.state.entries.map((entryData) => (
        <Entry
          handleView={this.props.handleView}
          key={entryData.id}
          entryData={entryData}
          handleDelete={this.deleteEntry}
        />
      ))
    }
    else if (this.props.view.page === 'home'){
          view1 =
          <Home
          />
    }
    else if (this.props.view.page === 'about'){
          view1 =
          <About
          />
    }
    else if (this.props.view.page === 'viewArt') {
      let artArray = [];
      for (var i = 0; i < this.state.entries.length; i++) {
        if (this.state.entries[i].subject==="Art") {
          artArray.push(this.state.entries[i])
        }
      }
      view1 = artArray.map((entryData) => (
        <Art
          collapsible={this.collapsible}
          handleView={this.props.handleView}
          key={entryData.id}
          entryData={entryData}
          handleDelete={this.deleteEntry}
        />
      ))
    }
    else if (this.props.view.page === 'viewCS') {
      let csArray = [];
      for (var i = 0; i < this.state.entries.length; i++) {
        if (this.state.entries[i].subject==="Computer Science") {
          csArray.push(this.state.entries[i])
        }
      }
      view1 = csArray.map((entryData) => (
        <CS
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
