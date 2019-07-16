import React from 'react';
import JobListings from './components/JobListings/JobListings';
import Step2 from './components/JobWizard/Step2';
import Step1 from './components/JobWizard/Step1';

import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="App">
     <JobListings/>
     {routes}
    </div>
  );
}

export default App;
