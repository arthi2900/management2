import { useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { APIstudent} from './APIteacher';
import {studentValidationSchema} from './NewFunction';
import {useFormik} from "formik";

export function Editstudent() {
  const [ studentlist,setstudentlist]= useState(null);
    const { id } = useParams();
  //console.log(id, studentlist);
 // const student = studentlist[id];
 // console.log(student);
 useEffect(()=>{
  fetch(`${APIstudent}/student/${id}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setstudentlist(mvs));
},[])
return(
  <div>
{studentlist ?< Studentedit  studentlist={studentlist}/>:<h1>loading</h1>}
</div>
)
 }
function Studentedit({studentlist}){
  const formik=useFormik({
    initialValues:{
      sname:studentlist.sname,degree:studentlist.degree,
      year:studentlist.year,
      section:studentlist.section,batchyear:studentlist.batchyear,
    },
    validationSchema:studentValidationSchema, 
     onSubmit:(editst)=>{
      editstudent(editst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const editstudent =(editst)=>{
    fetch(`${APIstudent}/student/${studentlist.id}`,{
method:"PUT",
body:JSON.stringify(editst),
headers:{
  "content-Type":"application/json"
}})
.then(()=> history.push('/Student'));

console.log("edit",editst);
  };
 
  return(
  <div className="add-movie-form">
  <form onSubmit={formik.handleSubmit}>
    <TextField fullWidth label="name" id="sname" name="sname" 
    type="text" onChange={formik.handleChange}  value={formik.values.sname}
        />{formik.touched.sname && formik.errors.sname ?formik.errors.sname :" "}
    <TextField fullWidth label="Degree"  id="degree" name="degree" type="text"
     onChange={formik.handleChange} 
     value={formik.values.degree}
         />{formik.touched.degree && formik.errors.degree ?formik.errors.degree :" "}
    <TextField fullWidth label="Year" id="year" name="year" type="text"
onChange={formik.handleChange} 
value={formik.values.year}
    />{formik.touched.year && formik.errors.year ?formik.errors.year :" "}
    <TextField fullWidth label="Section" id="section" name="section" type="text"
onChange={formik.handleChange} 
value={formik.values.section}
    />{formik.touched.section && formik.errors.section ?formik.errors.section :" "}
    <TextField fullWidth label="Batch" id="batchyear" name="batchyear" type="text"
onChange={formik.handleChange} 
value={formik.values.batchyear}
    />{formik.touched.batchyear && formik.errors.batchyear ?formik.errors.batchyear :" "}
  <button >save</button>
  </form>
</div>
  )
}
/*const copystudentlist = [...studentlist];
    copystudentlist[id] = updatestudent;
    setstudentlist(copystudentlist);
   */