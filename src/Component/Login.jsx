import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
   const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const handleForm = (e)=>{
    e.preventDefault()//reload na ney
// const info ={
//     username,
//     email,
//     password,
//     confirmPassword
// }

login(email,password)
alert("login success")
console.log(email,password)
}

    return (
        <div style={{ textAlign: 'center' }}>
        <h1>Login Form</h1>
        <form onSubmit={handleForm} style={{ maxWidth: '400px', margin: '0 auto' }}>
         
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
          
          <div>
            {/* You can add a button here to perform some action if needed */}
            <button type='submit'
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </div>
        </form>
        <p><Link to='/register'>Register</Link></p>
      </div> 
    );
};

export default Login;