
export const AdminLogin = () => {
    return (
      <>
            <form>
          <label>Admin</label>       
          <div className="flex">
           
            <input 
              type='text' 
              className="border"
              placeholder="Username"
            />
          </div>
          <div className="flex">
           
            <input
              type='password'
              placeholder="Password"
              className="border"
            />
          </div>
          <div className="flex">
            <button
              className="border"
            >
                Login
            </button>
          </div>        
        </form>
      </>
    )
  }
  