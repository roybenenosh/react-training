import React, { useRef, useState } from 'react';

function LoginWithUseState({ user }) {
  const [loginUser, setLoginUser] = useState(user);

  function updateUser(propName, propValue) {
    let tempUser = { ...loginUser };
    tempUser[propName] = propValue;
    setLoginUser(tempUser);
  }

  function login() {
    if (loginUser.password !== loginUser.verifiedPassword) {
      alert("Password don't match");
    } else {
      alert('Logged in successfuly !');
    }
  }

  return (
    <div>
      <p>Login with useState: </p>
      <div className="row">
        <label>User Name</label>
        <input
          type="text"
          onClick={e => updateUser('userName', e.target.value)}
        />
      </div>

      <div className="row">
        <label>Password</label>
        <input
          type="text"
          onClick={e => updateUser('password', e.target.value)}
        />
      </div>

      <div className="row">
        <label>Verifiy Password</label>
        <input
          type="text"
          onClick={e => updateUser('verifiedPassword', e.target.value)}
        />
      </div>

      <div className="row">
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

function LoginWithUseRef({ user }) {
  const loginUser = useRef(user);

  function updateUser(propName, propValue) {
    loginUser.current[propName] = propValue;
  }

  function login() {
    if (loginUser.current.password !== loginUser.current.verifiedPassword) {
      alert("Password don't match");
    } else {
      alert('Logged in successfuly !');
    }
  }

  return (
    <div>
      <p>Login with useRef: </p>
      <div className="row">
        <label>User Name</label>
        <input
          type="text"
          onClick={e => updateUser('userName', e.target.value)}
        />
      </div>

      <div className="row">
        <label>Password</label>
        <input
          type="text"
          onClick={e => updateUser('password', e.target.value)}
        />
      </div>

      <div className="row">
        <label>Verifiy Password</label>
        <input
          type="text"
          onClick={e => updateUser('verifiedPassword', e.target.value)}
        />
      </div>

      <div className="row">
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export { LoginWithUseState, LoginWithUseRef };
