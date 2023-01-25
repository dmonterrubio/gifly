import React from 'react'
import 'App.css'
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResult';
import Detail from 'pages/Detail';
import StaticContext from 'context/StaticContext';
import { Route , Link} from "wouter";
import { GifsContextProvider} from './context/GifsContext'

const App = () => {
  
  return (
    <StaticContext.Provider value={ { name: 'dmonterrubio86', suscribete: true}}>
      <div className="App">
        <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt="Giffy logo" src="/logo.png" />
              </figure>
            </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route 
              component={SearchResults} 
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
    
  );
}

export default App;


