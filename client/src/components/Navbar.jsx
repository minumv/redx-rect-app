import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const Navbar = () => {
  const { currentUser } = useSelector((state)=> state.user)

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <div>
          <h1 className="text-red-800 font-bold capitalize">redx-rect-app</h1>
        </div>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
              {currentUser ? (
                <img 
                    src={ currentUser.profilepic} 
                    alt='profile'
                    className="h-7 w-7 rounded-full object-cover"
                />
              
              ) : ( 
                  <li>Sign in</li>
              )}
          </Link>         
        </ul>
      </div>
    </div>
  );
}
