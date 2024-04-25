import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Signup from './components/Signup.jsx'
import Login from "./components/Login.jsx"
import LoginSignupHub from "./components/LoginSignupHub.jsx"

function App() {


  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSignupHub />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} /> 
        </Routes>
      </Router>
    </main>
  )
}

export default App
