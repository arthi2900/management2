import { useParams, useHistory } from "react-router-dom";
import{useEffect,useState} from 'react';
import { APIstudent} from './APIteacher';
export function Viewstudent() {
  const { id } = useParams();
  const [ studentlist,setstudentlist]= useState([]);
  const history = useHistory();
  //const student = studentlist[id];
  useEffect(()=>{
    fetch(`${APIstudent}/student/${id}`,
    {
      method:"GET",
    })
    //.then(data=>console.log(data))
    .then(data=>data.json())
    .then ((mvs)=>setstudentlist(mvs));
  },[])
  return (
    <div>
      <h1>{studentlist.sname}</h1>
      <h1>{studentlist.degree}</h1>
      <h1>{studentlist.year}</h1>
      <h1>{studentlist.section}</h1>
      <h1>{studentlist.batchyear}</h1>
      <button onClick={() => history.goBack()}> back</button>
    </div>
  );
}
