import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/form-link">Form (Basic)</Link></li>
          <li><Link to="/form-ref-link">Form with useRef</Link></li>
          <li><Link to="/form-state-link">Form with useState</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/form-link" element={<Form />} />
        <Route path="/form-ref-link" element={<FormRef />} />
        <Route path="/form-state-link" element={<FormState />} />
      </Routes>
    </Router>
  );
}

export default App;



