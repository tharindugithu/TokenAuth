import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
