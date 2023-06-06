import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import { routes } from './routes/router';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
