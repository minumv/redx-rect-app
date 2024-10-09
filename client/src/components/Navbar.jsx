import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h1 className="text-purple-900 font-bold">redx-rect-app</h1>
      </div>      
      <div className="flex">
      <div className="mx-6">
        <Link to='/'><h1>Home</h1></Link>
      </div>
      <div className="mx-4">
        <Link to='/profile'><h1>Profile</h1></Link>
      </div>
      <div className="mx-6">
        <Link to='/user-sign-in'><h1>Login</h1></Link>
      </div>
      </div>
    </div>
  )
}
