import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { SignIn } from "./pages/SignIn"
import  { AdminLogin } from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"
import { SignUp } from "./pages/SignUp"
import { Profile } from "./pages/Profile"
import { Navbar } from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>      
        <Route path='/signup' element={<SignUp />}/>      
        <Route path='/admin' element={<AdminLogin />}/>              
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/profile' element={<Profile />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App