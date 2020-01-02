import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main.js'
import Aside from './components/Aside.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Home'
      },
      formInputs: {
        title: null,
        subject: null,
        description: null,
        URL: null,
        cost: null,
        id: null,
        created_at: null,
        updated_at: null
      }
    }
  }
  handleView = (view, postData) => {
    // declare an empty variable
    let pageTitle = ''
    let formInputs = {
      title: '',
      subject: '',
      description: '',
      URL: '',
      cost: '',
      id: null,
      created_at: null,
      updated_at: null
    }

    switch (view) {
      case 'home':
        pageTitle = 'Home Page'
        break
      case 'viewAll':
        pageTitle = 'View All Entries'
        break
      case 'addEntry':
        pageTitle = 'New Resource'
        break
      case 'editEntry':
        pageTitle = 'Edit Resource'
        formInputs = {
          title: postData.title,
          subject: postData.subject,
          description: postData.description,
          URL: postData.URL,
          cost: postData.cost,
          id: postData.id,
          created_at: postData.created_at,
          updated_at: postData.updated_at
        }
        break
      default:
        break
    }

    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }


  render() {
    return (
      <div className="container1">
        <Aside handleView={this.handleView}/>
        <Main
          handleView={this.handleView}
          formInputs={this.state.formInputs}
          view={this.state.view}
        />
      </div>
    )
  }
}

export default App;
