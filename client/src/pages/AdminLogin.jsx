import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { OAuth } from "../components/OAuth";

export const AdminLogin = () => {
  const [ formData, setFormData ] = useState({});
  const { loading, error } = useSelector((state)=>state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart()); 
      const res = await fetch('/api/auth/admin',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
      })  
      const data = await res.json();
      dispatch(signInSuccess(data))
      if(data.success === false){
        dispatch(signInFailure(data))
        return
      } 
      navigate('/dashboard')      
    } 
    catch(err){
      dispatch(signInFailure(err))
    }
  }
    

  return (
    <>
      <div className="p-3 max-w-lg mx-auto mt-36">
        <h1 className="text-3xl text-center font-semibold my-7">Admin Sign In</h1>
        <form 
          className="flex flex-col gap-4"
          onSubmit={ handleSubmit }
        >
          
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
            { loading ? 'Loading..' : 'Sign In'}
          </button>   
         <p className="text-red-700 mt-5">{error ? error.message || 'Something went wrong!' : ''}</p>
        </form>
      </div>
    </>
  );
}
