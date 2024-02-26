
import './App.css'
import AppBar from './Components/Appbar'
import Landing from './Components/Landing'


function App() {


  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            {/* Your application content goes here */}
            <AppBar image='/src/assets/Solo.jpeg' alt='logo'/>
            <Landing />


        </div>
  )
}

export default App
