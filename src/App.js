import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/NavBar/Navigation.jsx';
import News from './components/News/News.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Route, BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
        <div className='app-wrapper' >
            <Header />
            <Navigation />
            <div className='app-wrapper-content'>
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
            </div>  
      </div>
    </BrowserRouter>
   
  )
}


export default App;

