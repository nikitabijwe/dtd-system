import React from 'react';
import SimulationForm from './components/simulation-form/SimulationForm';
import SimulationResultsTable from './components/simulation-table/SimulationResultsTable';
import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 rounded p-3 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
        </div>
        <SimulationForm />
        <SimulationResultsTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
