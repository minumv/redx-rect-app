import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const Navbar = () => {
  const { currentUser } = useSelector((state)=> state.user)

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <div>
          <h1 className="font-bold capitalize">redx-rect-app</h1>
        </div>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
         
              {currentUser ? (
                <>
                   <Link to="/profile">
                    <img 
                        src={ currentUser.profilepic} 
                        alt='profile'
                        className="h-7 w-7 rounded-full object-cover"
                    />
                 </Link> 
               
                  <Link to="/signout">
                    <p className='text-red-300'>signout</p>
                  </Link>
                  
                </>
              
              ) : ( 
                  <li>Sign in</li>
              )}
                 
        </ul>
      </div>
    </div>
  );
}
