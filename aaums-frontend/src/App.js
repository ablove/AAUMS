
import './App.css';
import Main from './homepage/Main/Main';
import Login from './Login/Login';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    { /**  <Main/>     **/}
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
