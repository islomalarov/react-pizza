import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import { routes } from './routes/router';

import SearchContext from './context/SearchContext';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route path={path} element={element} key={index} />
              ))}
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
