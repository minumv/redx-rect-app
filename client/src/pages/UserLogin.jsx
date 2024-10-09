import { Link } from "react-router-dom"

export const UserLogin = () => {
  return (
    <>
          <form>
        <label>Login</label>       
        <div className="flex">
          <label>Username:</label>
          <input 
            type='text' 
            className="border"
          />
        </div>
        <div className="flex">
          <label>Password:</label>
          <input
            type='password'
            className="border"
          />
        </div>
        <div className="flex">
          <button
            className="border bg-blue-700 text-white"
          >
              SignIn
          </button>
        </div>
        <div className="flex">
          <h6>Are you new to Typux? <span className="text-blue-700 cursor-pointer"><Link to='/user-sign-up'>Signup</Link></span></h6>
        </div>
        <div>
          <label>Or</label>
        </div>
        <div className="flex">
          <button
            className="border bg-red-700 text-white"
          >
              Sign in with Google
          </button>
        </div>        
      </form>
    </>
  )
}
