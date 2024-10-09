import { Link } from "react-router-dom"

export const SignUp = () => {
  return (
    <>
      <form>
        <label>SignUp</label>
        <div className="flex">
          <label>Name:</label>
          <input 
            type='text' 
            className="border"
          />
        </div>
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
              SignUp
          </button>
        </div>        
        <div className="flex">
          <h6>Already a member? <span className="text-blue-700 cursor-pointer"><Link to='/user-sign-in'>Login</Link></span></h6>
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
