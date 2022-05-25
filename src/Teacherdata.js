import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useEffect ,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { APIteacher } from './APIteacher';
import { Teacher } from './Teacher';
export function Teacherdata() {
  const history = useHistory();
  const [ teacherlist,setteacherlist]= useState([]);
  
  const getteacher=()=>{
    //
    fetch(`${APIteacher}/teacher`)
    //.then(data=>console.log(data))
    .then(data=>data.json())
    .then ((mvs)=>setteacherlist(mvs));
  }
  useEffect(()=>getteacher(),[]);
//const teacherdelete =(id)=>console.log("deleting ",id);
const teacherdelete =(id)=>{
  fetch(`${APIteacher}/teacher/${id}`,{method:"DELETE"})
  .then(()=>getteacher());
  //.then(data=>console.log(data))
  }

  return (
    <div className="App">
      <div className="teacher-list">
        {teacherlist.map(({tname,tdegree,texp,id}, index) => (
          <Teacher key={index}
            tname={tname}
            tdegree={tdegree}
            texp={texp}
            deleteteacher={<IconButton aria-label="add to favorites" color="error"
              onClick={() => teacherdelete(id)}><DeleteIcon /></IconButton>}
            editteacher={<IconButton aria-label="add to favorites" color="primary"
              onClick={() => history.push(`/Teacher/edit/${id}`)}>  <EditIcon />
            </IconButton>}
            id={id} />))}

      </div>
    </div>
  );
}
