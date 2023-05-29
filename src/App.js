import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import { routes } from './routes/router';

function App() {
  return (
    <div className="wrapper">
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
    </div>
  );
}

export default App;
