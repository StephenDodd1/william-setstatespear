import React, { Component } from 'react';
import PoemListPage from './PoemListPage'
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <a href='/'>Poem List</a>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route 
            exact path='/'
            component={PoemListPage}/>
                    </main>
                    <footer>
                      <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
                    </footer>
                  </div>
                );
              }
            }
            
            export default App;
