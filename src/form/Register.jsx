import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [submitAja, setSubmitAja] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!firstName || !lastName || !email || !password || !confirmPass) {
      alert('Harap diisi yg masih kosong');
      return;
    }

    if (password !== confirmPass) {
      alert('Passwordnya gk sama');
      return;
    }

    // Form is valid
    setSubmitAja(true);

    
    console.log('Berhasil dikumpulkan:', {
      firstName,
      lastName,
      email,
      password,
    });
    alert('register berhasil')
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Registration</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPass">Confirm Password:</label>
        <input
          type="password"
          id="confirmPass"
          value={confirmPass}
          onChange={(event) => setConfirmPass(event.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
      {submitAja && <p className="success-message">Registration successful!</p>}
    </form>
  );
};

export default RegistrationForm;
