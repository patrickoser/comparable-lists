import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Signup from './components/Signup.jsx'
import Login from "./components/Login.jsx"
import LoginSignupHub from "./components/LoginSignupHub.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {


  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LoginSignupHub />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} /> 
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
