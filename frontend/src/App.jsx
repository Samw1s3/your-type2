import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Meetups from './pages/meetups' 
function App() {
  return (
    <>
          <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/meetups' element={<Meetups />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      
    </>
  );
}

export default App;
