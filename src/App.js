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
        pageTitle: 'View All'
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

  }


  render() {
    return (
      <div className="container1">
        <Aside />
        <Main />
      </div>
    )
  }
}

export default App;
