import React from 'react'

function Login() {
  return (
    <div>
        <h1>Sign In</h1>
        <form action="">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='username' required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='password' required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
    </div>
  )
}

export default Login