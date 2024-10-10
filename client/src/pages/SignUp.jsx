import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { OAuth } from "../components/OAuth";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

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
      navigate('/user-sign-in')      
            
    } 
    catch(err){
      setLoading(false);
      setError(true);
    }
  }
    

  return (
    <>
      <div className="p-3 max-w-lg mx-auto mt-20">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
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
            className="bg-slate-700 text-white p-3 rounded-lg capitalize hover:opacity-85"
          >
            { loading ? 'Loading..' : 'Sign Up'}
          </button>

          <div className="flex gap-2 mt-1 justify-center">
            <h6>Already a member? </h6>
            <span className="text-blue-700 cursor-pointer">
                <Link to="/signin">Sign In</Link>
            </span>           
          </div>
          <div class="flex items-center">
            <div class="flex-grow border-t border-gray-300"></div>
              <span class="px-3 text-gray-500">Or</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <OAuth />
            <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
        </form>
      </div>
    </>
  );
}
