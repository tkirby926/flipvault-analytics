import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './Pages/HomePage';
import { UserComponent } from './Pages/UserLookupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
     <div>
    {/* <HeaderComponent ref={headerRef} hide_search_results={hide_search_results} hide_drops={hide_drops} hide_all_buttons={hide_all_buttons} hide_search={hide_search} course_prof = {course_prof}></HeaderComponent> */}
    <div class="class-app" style={{fontFamily: 'Arial, Helvetica, sans-serif',  
     backgroundAttachment: 'fixed', minHeight: '90vh', minWidth: '100vw', overflow: 'auto', fontWeight: '600'}}> 
    <Router>
        <Routes>
          <Route path='/' element = {<HomeComponent />}></Route> 
          <Route path='/users' element = {<UserComponent />}></Route> 
            {/* <Route path='/edit/:userid' element={<EditProfileComponent />} /> */}
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
