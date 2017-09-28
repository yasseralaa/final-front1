import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/statics/header.component';

import AddUserComponent from './components/authentication/addUser.component';
import Authentication from './components/authentication/authentication.component';
import AddNoteComponent from './components/notes/addNote.component';
import ViewWeatherComponent from './components/weather/viewWeather.component';
import ViewNoteComponent from './components/notes/viewNote.component';
import ViewAllNotesComponent from './components/notes/viewAllNotes.component';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div >
        <Header/>

        <section>
          <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {this.props.children}
                </div>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
