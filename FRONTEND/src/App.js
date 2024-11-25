import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import EditPage from './pages/EditPage';
import MainEditPage from './pages/MainEditPage';
import CreatePage from './pages/CreatePage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/> 
          <Route path='/editpage/:id' element={<EditPage/>}/>
          <Route path='/editmainpage' element={<MainEditPage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
        </Routes>
      </BrowserRouter>
      

      

    </div>
  );
}

export default App;
