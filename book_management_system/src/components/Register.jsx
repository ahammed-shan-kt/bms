import React from 'react'

function Register() {
  return (
    <div>
        <h1>Create new account</h1>
        <form action="">
            <div>
                <div>
                    <label for="name">First Name:</label>
                    <input type="text" id="name" name="name" placeholder='first name' required/>
                </div>
                <div>
                    <label for="name">Last Name:</label>
                    <input type="text" id="name" name="name" placeholder='last name' required/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='example:john@gmail.com' required/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='password' required/>
                </div>
                <div>
                    <label for="confirm_password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" placeholder='confirm your password' required/>
                </div>
                <div>
                    <button type='submit'>Create account</button>
                </div>
            </div>
        </form>
        <p>already have an account? <a href="/login">login</a></p>
    </div>
  )
}

export default Register