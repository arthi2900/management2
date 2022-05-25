import './App.css';
import { Link, Switch, Route} from "react-router-dom";
import { useState} from 'react';
import { Intro } from './Intro';
import { Login } from './Login';
import { Data } from './Data';
import { Viewstudent } from './Viewstudent';
import { Editstudent } from './Editstudent';
import { NewFunction } from './NewFunction';
import { Addteacher } from './Addteacher';
import { Viewteacher } from './Viewteacher';
import { Teacherdata } from './Teacherdata';
import { Editteacher } from './Editteacher';
import { teacherdatalist } from './teacherdatalist';
import { studentdetails } from './studentdetails';
function App() {
  const [ studentlist,setstudentlist]= useState([]);
  const [ teacherlist,setteacherlist]= useState([]);
  return (
    <div className="App">
            <Intro/>
            <div>
      <Link to="/Home">Home  </Link>
      <Link to="/Teacher">Teacher  </Link>
      <Link to="/addTeacher">AddTeacher  </Link>
      <Link to="/Student">Student  </Link>
      <Link to="/NewFunction">Add Student  </Link>
          <Link to="/Login">Login  </Link>
      <Switch>
        <Route path="/Home"></Route>
        <Route path="/Teacher/edit/:id"><Editteacher /></Route>
        <Route path="/Teacher/:id"><Viewteacher /></Route>
              <Route path="/addTeacher"><Addteacher /></Route>
  <Route path="/Teacher"><Teacherdata /></Route>
 <Route path="/Student/edit/:id"><Editstudent /></Route>
 <Route path="/Student/:id">< Viewstudent /></Route>
        <Route path="/Student"><Data /></Route>
        <Route path="/NewFunction"><NewFunction/></Route>
        <Route path="/Login"><Login/></Route>
      </Switch>
    </div>
           </div>
  );}

 export default App;
