import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';

const App = () => {
  return (
    <Fragment>
      <Task1/>
      <Task2/>
    </Fragment>
  );
};

export default App;