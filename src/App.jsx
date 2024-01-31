
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ClockHeading from './components/clockHeading'
import ClockSlogan from './components/clockSlogan'
import CurrentTime from './components/currentTime'

function App() {
  return <center className="container">
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
  </center>
}

export default App
