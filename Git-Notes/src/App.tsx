
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import AppBar from './Components/Appbar'
import Landing from './Components/Landing'
import Semesters from './Components/Semesters';


function App() {


  return (
    <div style={{ backgroundColor: 
    'black', minHeight: '100vh' }}>
      <Router>
            <AppBar image='/src/assets/Solo.jpeg' alt='logo'/>
            <Routes>
            <Route path={'/'} element={<Landing />} />
            <Route path={'/Semester/'} element={<Semesters/>} />

            </Routes>
            


        
      </Router>
            
            


        </div>
  )
}

export default App
