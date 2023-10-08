import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';

const Registration = () => {
    const {user,newUser} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

const handleForm = (e)=>{
    e.preventDefault()//reload na ney
// const info ={
//     username,
//     email,
//     password,
//     confirmPassword
// }
if (password !== confirmPassword ){
    return alert("password didn't match,try again")
}
newUser(email,password)
alert("Register success")
console.log(email,password)
}



    return (
        <div style={{ textAlign: 'center' }}>
        <h1>Registration Form</h1>
        <form onSubmit={handleForm} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            />
          </div>
          <div>
            {/* You can add a button here to perform some action if needed */}
            <button 
            type='submit'
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </div>
        </form>

      </div> 
    );
};

export default Registration;