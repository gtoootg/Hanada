import React from 'react';
import Home from './Home';
import DummyPage from './DummyPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dummypage' element={<DummyPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;

