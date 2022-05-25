import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Student } from "./Student";
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { APIstudent} from './APIteacher';
export function Data() {
  const [ studentlist,setstudentlist]= useState([]);
  const history = useHistory();
  const getteacher=()=>{
  fetch(`${APIstudent}/student`)
  .then((data)=>(data.json()))
  .then((mvs)=>setstudentlist(mvs));
  };
  useEffect(()=>getteacher(),[]);
const studentdelete=(id)=>{
  fetch(`${APIstudent}/student/${id}`,{
    method:"DELETE",
  }).then(()=>getteacher());
  };
 
  return (
    <div className="data">
           <div className="student-list">
        {studentlist.map(({sname,year,batchyear,degree,section,id}, index) => (
          <Student key={index}
            sname={sname} degree={degree}
            year={year} section={section}
            batchyear={batchyear}
            //delete comment 
            deleteButton={<IconButton aria-label="add to favorites" color="error"
              onClick={() => studentdelete(id)}>  <DeleteIcon />
            </IconButton>}
            editButton={<IconButton aria-label="add to favorites" color="primary"
              onClick={() =>history.push(`/Student/edit/${id}`)}>  <EditIcon />
            </IconButton>}
            id={id} />
        ))}
      </div>
    </div>
  );
}

//
 /*
 fetch(`${APIstudent}/student`)
.then((data)=>(data.json()))
.then((mvs)=>setstudentlist(mvs));
*/