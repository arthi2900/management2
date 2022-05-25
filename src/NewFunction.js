import { useHistory } from "react-router-dom";
import { useState} from 'react';
import { APIstudent} from './APIteacher';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import *as yup from "yup";

export const studentValidationSchema=yup.object({
  sname: yup.string().required("why not fill this name???"),
  degree: yup.string().required("why not fill this exper?"),
  year:yup.string().required("why not fill this degree???"),
  section:yup.string().required("why not fill this degree???"),
  batchyear:yup.string().required("why not fill this degree???")
 })


export function NewFunction() {
 
   const formik=useFormik({
    initialValues:{
      sname:" ",degree:" ",year:" ",section:"",batchyear:" "
    },
    validationSchema:studentValidationSchema, 
     onSubmit:(addst)=>{
      newstudent(addst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const newstudent =(addst)=>{
    
  fetch(`${APIstudent}/student/`,{
    method:"POST",
    body:JSON.stringify(addst),
    headers:{
      "content-Type":"application/json"
    },
    }).then(()=> history.push('/Student'));}

  return (<div className="add-movie-form">
    <form onSubmit={formik.handleSubmit}>
    <TextField fullWidth label="name" id="sname" name="sname" type="text"
      placeholder="Name"
      onChange={formik.handleChange} 
    value={formik.values.sname}
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
    <Button type="submit">add movie</Button>
    </form>
  </div>

  );
}


