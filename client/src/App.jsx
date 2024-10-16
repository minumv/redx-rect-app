import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { SignIn } from "./pages/SignIn"
import  { AdminLogin } from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"
import { SignUp } from "./pages/SignUp"
import { Profile } from "./pages/Profile"
import { Navbar } from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import AdminPrivateRoute from "./components/AdminPrivateRoute"
import EditUser from "./pages/EditUser"

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          {/* userside */}
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<SignIn />}/>      
          <Route path='/signup' element={<SignUp />}/>  
          <Route element={<PrivateRoute />}>           
            <Route path='/profile' element={<Profile />}/>
          </Route>

           {/* Admin side */}
           <Route path='/admin' element={<AdminLogin />}/> 
          <Route path="/admin/edit/:id" element={<EditUser />} />
          <Route element={<AdminPrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />}/>          
          </Route> 

      </Routes>
    </Router>
    </>
  )
}

export default App