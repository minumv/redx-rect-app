import { useState } from "react";
import { Link } from "react-router-dom"

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);    
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
      })  
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(true);
        return
      }
      setError(false);      
    } 
    catch(err){
      setLoading(false);
      setError(true);
    }
  }
    

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
        <form 
          className="flex flex-col gap-4"
          onSubmit={ handleSubmit }
        >
          <input
            type="text"
            className="bg-slate-100 p-3 rounded-lg"
            placeholder="Username"
            id="username"
            onChange={ handleChange}
          />

          <input
            type="email"
            className="bg-slate-100 p-3 rounded-lg"
            placeholder="Email"
            id="email"
            onChange={ handleChange}
          />
          <input
            type="password"
            className="bg-slate-100 p-3 rounded-lg"
            placeholder="Password"
            id="password"
            onChange={ handleChange}
          />         
          <button
            disabled= {loading} 
            className="bg-slate-700 text-white p-3 rounded-lg capitalize hover:opacity-95"
          >
            { loading ? 'Loading..' : 'SignUp'}
          </button>

          <div className="flex gap-2 mt-1 justify-center">
            <h6>Already a member? </h6>
            <span className="text-blue-700 cursor-pointer">
                <Link to="/user-sign-in">Login</Link>
            </span>           
          </div>
          <div class="flex items-center">
            <div class="flex-grow border-t border-gray-300"></div>
              <span class="px-3 text-gray-500">Or</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="bg-red-800 mt-1 text-white p-3 rounded-lg capitalize hover:opacity-95">
              Sign in with Google
            </button>
            <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
        </form>
      </div>
    </>
  );
}
