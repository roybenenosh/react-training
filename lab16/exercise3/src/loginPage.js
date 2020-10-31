import React from 'react';

export default function LoginPage({ updateUser, user }) {
  return (
    <div className="login-page-wrapper">
      <div className="row">
        <label>User Name</label>
        <input
          value={user['User Name']}
          type="text"
          id="username"
          onChange={e => updateUser({ 'User Name': e.target.value })}
        />
      </div>
      <div className="row">
        <label>Password</label>
        <input
          value={user['Password']}
          type="text"
          id="password"
          onChange={e => updateUser({ Password: e.target.value })}
        />
      </div>
    </div>
  );
}
