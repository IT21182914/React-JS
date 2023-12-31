import React, { useState } from 'react';

function UserProfile() {
  // State variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Event handlers to update state
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  // Submit handler to set submitted state
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setSubmitted(true);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Submitted Information:</h3>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
