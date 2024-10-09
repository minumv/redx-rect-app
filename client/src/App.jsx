import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { UserLogin } from "./pages/UserLogin"
import { AdminLogin } from "./pages/AdminLogin"
import Dashboard from "./pages/Dashboard"
import { SignUp } from "./pages/SignUp"
import { Profile } from "./pages/Profile"

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/user-sign-in' element={<UserLogin />}/>      
      <Route path='/user-sign-up' element={<SignUp />}/>      
      <Route path='/admin-sign-in' element={<AdminLogin />}/>
      <Route path='/dashboard' element={<Dashboard />}/>      
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </Router>
    </>
  )
}

export default App