import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import AddUserComponent from './components/authentication/addUser.component';
import LogoutComponent from './components/authentication/addUser.component';
import Authentication from './components/authentication/authentication.component';
import AddNoteComponent from './components/notes/addNote.component';
import ViewWeatherComponent from './components/weather/viewWeather.component';
import ViewNoteComponent from './components/notes/viewNote.component';
import ViewAllNotesComponent from './components/notes/viewAllNotes.component';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers'; // goes to index.js in reducers folder




const Routes = () => ( // a function component (as component are not necessarily classes)
    <Router>
        <div>
            <App>
                <Switch>
                    <Route exact path="/register" component={AddUserComponent} />
                    <Route exact path="/login" component={Authentication} />
                    <Route exact path="/addnote" component={AddNoteComponent} />
                    <Route exact path="/weather" component={ViewWeatherComponent} />
                    <Route exact path="/note" component={ViewNoteComponent} />
                    <Route exact path="/viewallnotes" component={ViewAllNotesComponent} />
                    {/* <Route exact path="/logout" component={LogoutComponent} /> */}


                    <Route exact path="/">
                        <Redirect to="/register" />
                    </Route>
                </Switch>
            </App>
        </div>
    </Router>
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore); // search what is this

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <Routes />
    </Provider>
),
    document.getElementById('root'));
registerServiceWorker();


