import { useParams, useHistory  } from 'react-router-dom';
import{useEffect,useState} from 'react';
import { APIteacher } from './APIteacher';
export function Viewteacher() {
  const history = useHistory();
  const [ teacher,setteacher]= useState({});
  const { id } = useParams();
  //const teacher1 = teacherlist[id];

 useEffect(()=>{
  fetch(`${APIteacher}/teacher/${id}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setteacher(mvs));
},[])
 //onst teacher1 ={};
 return (
    <div>
      <h1>{teacher.tname}</h1>
      <h1>{teacher.tdegree}</h1>
      <h1>{teacher.texp}</h1>
      <button onClick={() => history.goBack()}>back</button>
    </div>
  );
}
