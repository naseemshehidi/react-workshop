import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="text-center mb-5">Sign In</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block rounded-0"
            style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', marginTop: '20px'}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
