
import './App.css';
import Editor from './Components/Editor';
import ContentPage from './pages/ContentPage';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Main from './Components/Main'





function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Main/>
   <Routes>
   <Route path="/" element={<Home/>} exact/>
   <Route path="/:category" element={<ContentPage/>}/>
   </Routes>

   </Router>
     
     {/* <ContentPage/> */}
     {/* <QuestionPage/> */}

     {/* <Editor/> */}
   </>
  );
}

export default App;
