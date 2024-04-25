import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Signup from './components/signup'
import Login from "./components/login"
import LoginSignupHub from "./components/loginSignupHub"

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
